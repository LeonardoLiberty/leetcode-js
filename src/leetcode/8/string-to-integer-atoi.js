/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const MIN = -Math.pow(2, 31)
  const MAX = Math.pow(2, 31) - 1

  let re = 0
  let sign = 1
  let i = 0
  // remove white space -- only ' '
  while (str[i++] === ' ');
  i--

  // optional +/-
  if (str[i] === '+') {
    i++
  } else if (str[i] === '-') {
    i++
    sign = -1
  }

  while (i < str.length) {
    let num = str.charCodeAt(i++) - 48
    if (num < 0 || num > 9) break

    re = re * 10 + num
    if (re > MAX) {
      return sign === 1 ? MAX : MIN
    }
  }

  return sign * re
}

export default myAtoi
