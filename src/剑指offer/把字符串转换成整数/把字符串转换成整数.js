function StrToInt (str) {
  const VALID = '0123456789'
  let num = 0
  let positive = true
  for (let i = 0; i < str.length; ++i) {
    if (i === 0 && str[i] === '+') positive = true
    else if (i === 0 && str[i] === '-') positive = false
    else if (VALID.indexOf(str[i]) !== -1) {
      num = num * 10 + str.charCodeAt(i) - 48
    } else {
      return 0
    }
  }
  return positive ? num : -num
}
export default StrToInt
