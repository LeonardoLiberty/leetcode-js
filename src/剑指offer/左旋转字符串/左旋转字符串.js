function LeftRotateString (str, n) {
  if (!str) return ''
  let len = str.length
  n %= len
  return str.substr(n).concat(str.slice(0, n))
}

export default LeftRotateString
