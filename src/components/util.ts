const ANNOTATION_COLORS = [
  '#ff9797',
  '#9eb2dd',
  '#ffdc97',
  '#7bcf7b'
]

/*!
 * Group items from an array together by some criteria or value.
 * (c) 2019 Tom Bremmer (https://tbremer.com/) and Chris Ferdinandi (https://gomakethings.com), MIT License,
 * @param  {Array}           arr      The array to group items from
 * @param  {String|Function} criteria The criteria to group by
 * @return {Object}                   The grouped object
 */
function groupBy (arr: Array<any>, criteria: string| ((item: any) => any)) {
  return arr.reduce(function (obj, item) {
    // Check if the criteria is a function to run on the item or a property of it
    const key = typeof criteria === 'function' ? criteria(item) : item[criteria]

    // If the key doesn't exist yet, create it
    if (!Object.hasOwn(obj, key)) {
      obj[key] = []
    }

    // Push the value to the object
    obj[key].push(item)

    // Return the object to the next item in the loop
    return obj
  }, {})
}

function clamp (number: number, min: number, max: number) {
  return Math.max(min, Math.min(number, max));
}

function stripHashname (name: string) {
  // Strip the hashname from the given string, return with trailing # if there was one.
  // and do not strip anything if the # is leading
  const hashIndex = name.indexOf('#')
  // Do not strip if the name starts with a #
  if (hashIndex > 1) {
    return name.substr(0, hashIndex + 1)
  } else {
    return name
  }
}

export type TextSelection = {
  startIndex: number,
  endIndex: number,
  interviewId: string,
  text?: string
}

export type NamedAction = [
  name: string,
  action: (element: any) => any,
  tooltip?: string
]

export { ANNOTATION_COLORS, groupBy, clamp, stripHashname }
