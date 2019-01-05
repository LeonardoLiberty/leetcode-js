/**
 * @param {number} nu
 * @return {string}
 */
var intToRoman = function (num) {
  //  num [1, 3999]

  const fd = (x, y) => Math.floor(x / y)
  const syms = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
  const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  let re = ''

  for (let i = values.length - 1; i > -1; --i) {
    let times = fd(num, values[i])
    for (let j = 0; j < times; ++j) re += syms[i]
    num %= values[i]
  }
  return re
}

export default intToRoman
