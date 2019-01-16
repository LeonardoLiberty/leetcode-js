/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const syms = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
  const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  let re = 0
  let i = syms.length - 1
  while (s.length !== 0) {
    if (s.startsWith(syms[i])) {
      s = s.substr(syms[i].length)
      re += values[i]
    } else {
      i--
    }
  }
  return re
}

export default romanToInt
