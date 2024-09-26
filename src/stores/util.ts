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

export { ellipsize, ANNOTATION_COLORS }
