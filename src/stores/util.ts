const ANNOTATION_COLORS = [
  '#ff9797',
  '#7084b0',
  '#ffdc97',
  '#7bcf7b'
]

const SHORT_TEXT_LIMIT = 25

function ellipsize (text: string, limit: number = SHORT_TEXT_LIMIT): string {
  if (text.length < limit) {
    return text
  } else {
    return `${text.slice(0, limit / 2)}\u{22ef}${text.slice(-limit / 2)}`
  }
}

function basename (path: string) {
  return path.split('/').pop() ?? ""
}

function groupBy<T>(
  arr: T[],
  f: keyof T | ((item: T) => string)
): Record<string, T[]> {
  return arr.reduce((out: Record<string, T[]>, val: T) => {
    const key =
      typeof f === 'function' ? f(val) : String(val[f]);

    (out[key] = out[key] || []).push(val);
    return out;
  }, {});
}

function timestampAdd (name: string): string {
  // Offset the iso time so that toISOString returns a correct timestamp (for the user)
  const d = new Date();
  const tzoffset = d.getTimezoneOffset() * 60000; // offset in milliseconds
  const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
  const timestamp = localISOTime.substr(0, 19).replace(/:/g, '')

  return `${timestamp}-${name}`
}

function timestampStrip (name: string): string {
  return name.replace(/^\d{4}-\d{2}-\d{2}T\d{6}-/, '')
}

function timestampGet (name: string): Date | null {
  const m = name.match(/^(\d{4}-\d{2}-\d{2})T(\d{2})(\d{2})(\d{2})-/)
  if (m) {
    const datestr = `${m[1]}T${m[2]}:${m[3]}:${m[4]}`
    return new Date(datestr)
  } else {
    return null
  }
}

function stringToId (name: string): string {
  const id = name ? name.replace(/\W/g, '_') : '_'
  return id.charAt(0).match(/\d/g)?.length ? `_${id}` : id
}

/**
 * Recursively strip the 'id' property from an object and its nested children.
 *
 * @param {object} obj - The hierarchical object structure.
 * @returns {object} A new object with 'id' properties removed.
 */
// Define a type for a generic, potentially hierarchical object structure
type HierarchicalObject = {
  [key: string]: unknown // Keys are strings, values can be anything
}
const stripIds = <T>(obj: T): T => {
  // 1. Handle non-object types (primitives, null)
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  // Cast for safer access within the function
  const currentObj = obj as HierarchicalObject | unknown[]

  // 2. Handle arrays
  if (Array.isArray(currentObj)) {
    // Map over the array and recursively call stripIds on each element.
    // The result is cast back to T (which should be an array type)
    return currentObj.map(stripIds) as T
  }

  // 3. Handle standard objects
  const newObj: HierarchicalObject = {}

  for (const key in currentObj) {
    // Check if the key is actually a property of the object (not inherited)
    if (Object.prototype.hasOwnProperty.call(currentObj, key)) {

      // Skip the 'id' property
      if (key === 'id') {
        continue
      }

      const value = currentObj[key]

      // Recursively process nested objects or arrays
      if (typeof value === 'object' && value !== null) {
        // We call stripIds recursively and cast the result back to unknown for assignment
        newObj[key] = stripIds(value)
      } else {
        // Copy all other properties (primitives, functions, etc.)
        newObj[key] = value
      }
    }
  }

  // Cast the final result back to the expected return type T
  return newObj as T
}

export {
basename,
ellipsize,
groupBy,
stringToId,
stripIds,
timestampAdd,
timestampGet,
timestampStrip,
ANNOTATION_COLORS
}
