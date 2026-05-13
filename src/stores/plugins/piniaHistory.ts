/**
 * piniaHistory.ts
 *
 * A Pinia plugin that implements undo/redo across ALL stores with transaction support.
 *
 * Architecture
 * ────────────
 * - Every store mutation (via $patch or direct assignment) is intercepted by $subscribe.
 * - The FULL snapshot of every registered store is saved as one History Entry so that
 *   undoing one action is always globally consistent (e.g. deleting a user and cascade-
 *   deleting their posts is one entry whose undo restores both stores at once).
 * - Transactions group several mutations into a single history entry.
 *   While a transaction is open, intermediate snapshots are discarded; only the state
 *   that existed BEFORE the transaction opened is kept, and it is pushed to the undo
 *   stack only when the transaction commits.
 *
 * Usage
 * ─────
 *   // main.ts
 *   import { createPinia } from 'pinia'
 *   import { PiniaHistoryPlugin } from '@/plugins/piniaHistory'
 *
 *   const pinia = createPinia()
 *   pinia.use(PiniaHistoryPlugin)
 *
 *   // In a component or store action
 *   import { useHistory } from '@/plugins/piniaHistory'
 *
 *   const history = useHistory()
 *
 *   // Simple action - automatically captured
 *   userStore.deleteUser(id)
 *
 *   // Transaction - groups several mutations into one undoable step
 *   history.beginTransaction('Delete user + posts')
 *   userStore.deleteUser(id)          // cascade: also calls postStore.deleteByUser(id)
 *   history.commitTransaction()
 *
 *   // Transient change: do not record history just for the next change
 *   history.isTransientChange = true
 *   userStore.basicAction()
 *
 *   history.undo()
 *   history.redo()
 */

import { type PiniaPlugin, type PiniaPluginContext, defineStore } from 'pinia'
import { toRaw } from 'vue'

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type Primitive = string | number | boolean | null | undefined;
type DataObject = Record<string, any>;
type DataMap = Record<string, DataObject>;

/** A complete snapshot of every registered store's state. */
export type GlobalSnapshot = Record<string, DataMap>


interface DiffOptions {
  ignoredFields?: string[];
  onlyChanges?: boolean; // If true, excludes 'unchanged' IDs and empty categories
}

interface PropertyChange {
  old: Primitive;
  new: Primitive;
}

interface DiffResult {
  added: Record<string, DataObject>;
  removed: Record<string, DataObject>;
  updated: Record<string, Record<string, PropertyChange>>;
  unchanged?: string[]; // Optional since it might be omitted
  changeCount: number;
}

function diffDataStructures(
  versionA: DataMap | undefined,
  versionB: DataMap | undefined,
  options: DiffOptions = {}
): DiffResult {
  const { ignoredFields = [], onlyChanges = false } = options;
  const ignoreSet = new Set(ignoredFields);

  const diff: DiffResult = {
    added: {},
    removed: {},
    updated: {},
    changeCount: 0
  };

  if (!versionA || !versionB) {
    return diff
  }
  if (!onlyChanges) {
    diff.unchanged = [];
  }

  const allIds = new Set([...Object.keys(versionA), ...Object.keys(versionB)]);

  for (const id of allIds) {
    const objA = versionA[id];
    const objB = versionB[id];

    // 1. Handle Additions
    if (!objA) {
      diff.added[id] = objB!;
      diff.changeCount++;
      continue;
    }

    // 2. Handle Removals
    if (!objB) {
      diff.removed[id] = objA!;
      diff.changeCount++;
      continue;
    }

    // 3. Compare Properties
    const changes: Record<string, PropertyChange> = {};
    let hasChanged = false;

    const allPropertyKeys = new Set([...Object.keys(objA), ...Object.keys(objB)]);

    for (const key of allPropertyKeys) {
      if (ignoreSet.has(key)) continue;

      const valA = objA[key];
      const valB = objB[key];

      // Skip nested objects
      if (
        (valA !== null && typeof valA === 'object') ||
        (valB !== null && typeof valB === 'object')
      ) {
        continue;
      }

      if (valA !== valB) {
        changes[key] = { old: valA, new: valB };
        diff.changeCount++;
        hasChanged = true;
      }
    }

    if (hasChanged) {
      diff.updated[id] = changes;
    } else if (!onlyChanges) {
      diff.unchanged?.push(id);
    }
  }

  return diff;
}

function diffSnapshot (before: GlobalSnapshot, after: GlobalSnapshot) {
  return Object.keys(before).map(name => {
    const diff = diffDataStructures(
      before[name],
      after[name],
      { onlyChanges: true }
    )
    return diff.changeCount ? [ name, diff ] : null
  })
    .filter(v => v !== null)
}

/** One entry on the undo/redo stack. */
export interface HistoryEntry {
  /** Human-readable label (auto-generated or set by transaction). */
  label: string
  /** The global state **before** this entry's mutations. */
  before: GlobalSnapshot
  /** The global state **after** this entry's mutations. */
  after: GlobalSnapshot
  diff: any
  /** ISO timestamp of when the entry was recorded. */
  timestamp: string
}

// ─────────────────────────────────────────────────────────────────────────────
// Internal History Store (not part of the public undo/redo stacks)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * The internal store that tracks state; created lazily on first access.
 * We keep it separate from user stores so it is never itself snapshotted.
 */
export const useHistoryStore = defineStore('__piniaHistory__', {
  state: () => ({
    undoStack: [] as HistoryEntry[],
    redoStack: [] as HistoryEntry[],

    /** Transient change (updating callback) - do not record and reset isTransientChange state */
    isTransientChange: false,

    /** True while replaying (undo/redo) - prevents re-recording. */
    isReplaying: false,

    /** True while a transaction is open. */
    isTransactionOpen: false,

    /** Label for the current open transaction. */
    transactionLabel: '',

    /**
     * Snapshot taken at the moment beginTransaction() was called.
     * This becomes the `before` of the committed entry.
     */
    transactionSnapshot: null as GlobalSnapshot | null,
  }),
})

// ─────────────────────────────────────────────────────────────────────────────
// Registry of all non-history stores and their snapshot helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Map of storeId → { $state getter, $patch setter } */
const storeRegistry = new Map<
  string,
  { getState: () => DataMap; setState: (s: DataMap | undefined) => void }
>()

/** IDs that must never be included in snapshots. */
const EXCLUDED_IDS = new Set(['__piniaHistory__', 'interface'])

/** Deep-clone via structuredClone (handles Dates, Maps, Sets, ArrayBuffers, etc.). */
function deepClone<T>(value: T): T {
  //return structuredClone(value)
  return JSON.parse(JSON.stringify(value))
}

/** Take a snapshot of every registered store. */
function captureGlobalSnapshot(): GlobalSnapshot {
  const snapshot: GlobalSnapshot = {}
  for (const [id, { getState }] of storeRegistry.entries()) {
    snapshot[id] = deepClone(getState())
  }
  console.log("captured state", snapshot)
  return snapshot
}

/** Restore every store to a previously captured snapshot. */
function restoreGlobalSnapshot(snapshot: GlobalSnapshot): void {
  for (const [id, { setState }] of storeRegistry.entries()) {
    if (id in snapshot) {
      setState(snapshot[id])
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// The Plugin
// ─────────────────────────────────────────────────────────────────────────────

let mutationCounter = 0

export const PiniaHistoryPlugin: PiniaPlugin = (context: PiniaPluginContext) => {
  const { store } = context

  // Skip the history store itself
  if (EXCLUDED_IDS.has(store.$id)) return

  // Register the store
  storeRegistry.set(store.$id, {
    getState: () => toRaw(store.$state) ?? null,
    setState: (s) => {
      // Group store changes
      store.$patch( (state) => {
        const snap = s as Record<string, unknown>
        for (const key of Object.keys(state)) {
          if (!(key in snap)) delete state[key]
        }
        Object.assign(state, snap)
      })
    }
  })

  // Subscribe to mutations
  store.$subscribe(
    (_mutation, _state) => {
      const historyStore = useHistoryStore()

      console.log("mutation record", _mutation)
      if (historyStore.isTransientChange) {
        historyStore.isTransientChange = false
        return
      }
      // Never record while we are replaying or inside a transaction
      if (historyStore.isReplaying) return
      if (historyStore.isTransactionOpen) return

      // Build the entry
      const after = captureGlobalSnapshot()
      // `before` is whatever the undo stack's last `after` is, or an empty snapshot
      const lastItem = historyStore.undoStack.length > 0 ? historyStore.undoStack[historyStore.undoStack.length - 1] : null
      const before = !lastItem
        ? captureGlobalSnapshot() // edge-case: very first mutation
        : lastItem.after

      mutationCounter++
      const entry: HistoryEntry = {
        label: `Mutation #${mutationCounter} on "${store.$id}"`,
        before,
        after,
        diff: diffSnapshot(before, after),
        timestamp: new Date().toISOString(),
      }
      console.log(`diff for ${entry.label}`, entry.diff)

      historyStore.undoStack.push(entry)
      // Any new mutation invalidates the redo stack
      historyStore.redoStack = []
    },
    { detached: true, flush: 'sync' },
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Public composable
// ─────────────────────────────────────────────────────────────────────────────

export function useHistory() {
  const historyStore = useHistoryStore()

  function setTransientChange() {
    historyStore.isTransientChange = true
  }

  /**
   * Open a transaction. All mutations made until commitTransaction() or
   * rollbackTransaction() are grouped into a single undo entry.
   *
   * Nested transactions are NOT supported; calling beginTransaction() while
   * one is open throws an error.
   */
  function beginTransaction(label = 'Transaction'): void {
    if (historyStore.isTransactionOpen) {
      throw new Error(
        `[piniaHistory] Cannot nest transactions. ` +
          `Current transaction: "${historyStore.transactionLabel}"`,
      )
    }
    // Capture state BEFORE any of the upcoming mutations
    historyStore.transactionSnapshot = captureGlobalSnapshot()
    historyStore.transactionLabel = label
    historyStore.isTransactionOpen = true
  }

  /**
   * Commit the open transaction: save one undo entry that spans all mutations
   * made since beginTransaction().
   */
  function commitTransaction(): void {
    if (!historyStore.isTransactionOpen) {
      throw new Error('[piniaHistory] No open transaction to commit.')
    }

    const before = historyStore.transactionSnapshot!
    const after = captureGlobalSnapshot()

    const entry: HistoryEntry = {
      label: historyStore.transactionLabel,
      before,
      after,
      timestamp: new Date().toISOString(),
      diff: diffSnapshot(before, after)
    }

    console.log(`diff for ${entry.label}`, entry.diff)

    historyStore.undoStack.push(entry)
    historyStore.redoStack = []

    // Reset transaction state
    historyStore.isTransactionOpen = false
    historyStore.transactionSnapshot = null
    historyStore.transactionLabel = ''
  }

  /**
   * Roll back the open transaction: restore state to what it was before
   * beginTransaction() and discard all intermediate mutations.
   */
  function rollbackTransaction(): void {
    if (!historyStore.isTransactionOpen) {
      throw new Error('[piniaHistory] No open transaction to roll back.')
    }

    const snapshot = historyStore.transactionSnapshot!

    historyStore.isReplaying = true
    try {
      restoreGlobalSnapshot(snapshot)
    } finally {
      historyStore.isReplaying = false
    }

    // Reset transaction state (do NOT push to undo stack)
    historyStore.isTransactionOpen = false
    historyStore.transactionSnapshot = null
    historyStore.transactionLabel = ''
  }

  /** Undo the last entry (or the last committed transaction). */
  function undo(): boolean {
    if (historyStore.undoStack.length === 0) return false

    const entry = historyStore.undoStack.pop()!

    historyStore.isReplaying = true
    try {
      restoreGlobalSnapshot(entry.before)
    } finally {
      historyStore.isReplaying = false
    }

    historyStore.redoStack.push(entry)
    return true
  }

  /** Redo the last undone entry. */
  function redo(): boolean {
    if (historyStore.redoStack.length === 0) return false

    const entry = historyStore.redoStack.pop()!

    historyStore.isReplaying = true
    try {
      restoreGlobalSnapshot(entry.after)
    } finally {
      historyStore.isReplaying = false
    }

    historyStore.undoStack.push(entry)
    return true
  }

  /** Clear both stacks (e.g. after a save). */
  function clearHistory(): void {
    historyStore.undoStack = []
    historyStore.redoStack = []
  }

  return {
    // Actions
    beginTransaction,
    commitTransaction,
    rollbackTransaction,
    setTransientChange,
    undo,
    redo,
    clearHistory,

    // Reactive state (use in templates / computed)
    get undoStack() {
      return historyStore.undoStack
    },
    get redoStack() {
      return historyStore.redoStack
    },
    get canUndo() {
      return historyStore.undoStack.length > 0
    },
    get canRedo() {
      return historyStore.redoStack.length > 0
    },
    get isTransactionOpen() {
      return historyStore.isTransactionOpen
    }
  }
}
