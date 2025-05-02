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

function timestampAdd (name: string) {
  // Offset the iso time so that toISOString returns a correct timestamp (for the user)
  const d = new Date();
  const tzoffset = d.getTimezoneOffset() * 60000; // offset in milliseconds
  const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
  const timestamp = localISOTime.substr(0, 19).replace(/:/g, '')

  return `${timestamp}-${name}`
}

function timestampStrip (name: string) {
  return name.replace(/^\d{4}-\d{2}-\d{2}T\d{6}-/, '')
}

function stringToId (name: string) {
  const id = name ? name.replace(/\W/g, '_') : '_'
  return id.charAt(0).match(/\d/g)?.length ? `_${id}` : id
}

export {
basename,
ellipsize,
groupBy,
stringToId,
timestampAdd,
timestampStrip,
ANNOTATION_COLORS
}
