// s字符串
function isNumeric (s) {
  if (!s) return false
  const VALID = '0123456789'
  let i = 0

  // first part (+|-)xxx.xxx
  let alreadyFloat = false
  for (; i < s.length; ++i) {
    // only first char can be sign (sign can't be last char)
    if (i === 0 && (s[i] === '+' || s[i] === '-')) {
      if (s[i + 1] === undefined || s[i + 1] === 'e' || s[i + 1] === 'E') {
        return false
      }
      continue
    } else if (s[i] === '.') {
      // only one . can occur
      if (alreadyFloat ||
        // inavlid: .e23
        (VALID.indexOf(s[i - 1]) === -1 && VALID.indexOf(s[i + 1]) === -1)) return false
      alreadyFloat = true
    } else if (VALID.indexOf(s[i]) === -1) {
      if (s[i] === 'e' || s[i] === 'E') break
      return false
    }
  }

  // second part
  let alreadyE = false
  for (; i < s.length; ++i) {
    if (s[i] === 'e' || s[i] === 'E') {
      // either the first e or repeat e or last e should be invalid
      if (i === 0 || alreadyE || i === s.length - 1) return false
      alreadyE = true
      if ((s[i + 1] === '+' || s[i + 1] === '-')) {
        i += 2
        continue
      }
    } else if (VALID.indexOf(s[i]) === -1) {
      return false
    }
  }
  return true
}

export default isNumeric
