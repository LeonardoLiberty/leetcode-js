/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const MIN = -Math.pow(2, 31)
  const MAX = Math.pow(2, 31) - 1
  let isNeg = false
  let re = 0

  // only space can be regarded as whitespace character
  // hence can not use trim
  for (let i = 0; i < str.length; ++i) {
    // first non-space char
    if (str[i] !== ' ') {
      if (str[i] === '-') {
        isNeg = true
        str = str.substr(i + 1)
      } else if (str[i] === '+') {
        str = str.substr(i + 1)
      } else if (str[i].charCodeAt(0) >= 48 &&
        str[i].charCodeAt(0) <= 57) {
        str = str.substr(i)
      } else {
        return re
      }
      break
    }
  }

  for (let i = 0; i < str.length; ++i) {
    let n = str[i].charCodeAt(0) - 48
    if (n < 0 || n > 9) {
      return isNeg ? -re : re
    }

    re = re * 10 + n
    if (re > MAX || re < MIN) {
      return isNeg ? MIN : MAX
    }
  }
  return isNeg ? -re : re
}

module.exports = myAtoi
