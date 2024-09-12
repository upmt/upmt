const SHORT_TEXT_LIMIT = 25

function ellipsize (text: string, limit: number = SHORT_TEXT_LIMIT): string {
  if (text.length < limit) {
    return text
  } else {
    return `${text.slice(0, limit / 2)}\u{00a0}\u{22ef}\u{00a0}${text.slice(-limit / 2)}`
  }
}

export { ellipsize }