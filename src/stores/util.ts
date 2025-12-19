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

/**
 * Recursively strip the given properties from an object and its nested children.
 *
 * @param {object} obj - The hierarchical object structure.
 * @param {fields} string[]
 * @returns {object} A new object with 'id' properties removed.
 */
const stripFields = <T>(obj: T, fields: string[]): T => {
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
    return currentObj.map(o => stripFields(o, fields)) as T
  }

  // 3. Handle standard objects
  const newObj: HierarchicalObject = {}

  for (const key in currentObj) {
    // Check if the key is actually a property of the object (not inherited)
    if (Object.prototype.hasOwnProperty.call(currentObj, key)) {

      // Skip the censored properties
      if (fields.includes(key)) {
        continue
      }

      const value = currentObj[key]

      // Recursively process nested objects or arrays
      if (typeof value === 'object' && value !== null) {
        // We call stripIds recursively and cast the result back to unknown for assignment
        newObj[key] = stripFields(value, fields)
      } else {
        // Copy all other properties (primitives, functions, etc.)
        newObj[key] = value
      }
    }
  }

  // Cast the final result back to the expected return type T
  return newObj as T
}

// Define a generic type for the objects we are caching.
// This assumes the objects found will generally have an 'id' property.
interface Identifiable {
  id?: string | number
  [key: string]: any
}

/**
 * Recursively traverses a data structure and maps IDs to object instances.
 *
 * @param node - The current object or array to inspect.
 * @param cache - The dictionary to populate (id -> object).
 * @param visited - (Internal) Tracks visited objects to prevent circular loops.
 * @returns The populated cache.
 */
function buildIdCache<T = any>(
  node: any,
  cache: Record<string | number, T> = {},
  visited: Set<any> = new Set()
): Record<string | number, T> {
  // 1. Base Case: If node is not an object or is null, stop.
  if (!node || typeof node !== 'object') {
    return cache
  }

  // 2. Cycle Detection: If we've seen this object before, skip it.
  if (visited.has(node)) {
    return cache
  }
  visited.add(node)

  // 3. Populate Cache: If the object has an 'id', add it to the map.
  // We explicitly check if the property exists to be safe.
  if ('id' in node) {
    const id = (node as Identifiable).id
    if (id !== undefined && id !== null) {
        cache[id] = node as T
    }
  }

  // 4. Recurse: Iterate over all keys (works for Arrays and Objects)
  // Object.keys is safer than for...in for iteration in TS to avoid prototype pollution issues
  Object.keys(node).forEach((key) => {
    buildIdCache(node[key], cache, visited)
  })

  return cache
}

// From https://quasar.dev/vue-components/table#exporting-data
function wrapCsvValue (val: any, formatFn: any = null, row: any = null) {
  let formatted = formatFn !== null
    ? formatFn(val, row)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}

function exportDataAsCsv (columns: any, rows: any): string {
  // naive encoding to csv format
  const content = [columns.map((col: any) => wrapCsvValue(col.label))].concat(
    rows.map((row: any) => columns.map((col: any) => wrapCsvValue(
      typeof col.field === 'function'
        ? col.field(row)
        : row[ col.field === void 0 ? col.name : col.field ],
      col.format,
      row
    )).join(','))
  ).join('\n')
  return content
}

export {
basename,
buildIdCache,
ellipsize,
groupBy,
stringToId,
stripFields,
stripIds,
timestampAdd,
timestampGet,
timestampStrip,
wrapCsvValue,
exportDataAsCsv,
ANNOTATION_COLORS
}
