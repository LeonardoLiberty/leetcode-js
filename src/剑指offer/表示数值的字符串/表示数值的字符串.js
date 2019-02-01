// s字符串
function isNumeric (s) {
  if (!s) return false
  const VALID = '0123456789'
  let alreadyFloat = false
  let alreadyE = false
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '+' || s[i] === '-') {
      // 只能出现在最开头或者e之后
      if (s[i - 1] !== 'e' && s[i - 1] !== 'E' && i !== 0) return false

      // +- 之后必须有数字或者.
      if (VALID.indexOf(s[i + 1]) === -1 && s[i + 1] !== '.') return false
    } else if (s[i] === 'e' || s[i] === 'E') {
      // 不能重复E
      if (alreadyE) return false
      // e不能开头或者结尾
      if (i === 0 || i === s.length - 1) return false
      alreadyE = true
    } else if (s[i] === '.') {
      // 不能重复且不能在e之后
      if (alreadyFloat || alreadyE) return false
      // .前后不能同时没有数字
      if (VALID.indexOf(s[i + 1]) === -1 && VALID.indexOf(s[i - 1]) === -1) return false
      alreadyFloat = true
    } else if (VALID.indexOf(s[i]) === -1) {
      return false
    }
  }

  return true
}

export default isNumeric
