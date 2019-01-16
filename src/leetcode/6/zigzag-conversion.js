/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows <= 1) return s
  const period = 2 * numRows - 2
  const times = Math.floor(s.length / period)
  const remainder = s.length % period
  let str = ''

  for (let row = 0; row < numRows; row++) {
    for (let i = 0; i < times; ++i) {
      str += s[period * i + row]
      if (row !== 0 && row !== numRows - 1) str += s[period * (i + 1) - row]
    }
    if (remainder > row) {
      str += s[period * times + row]
      if (row !== 0 &&
        row !== numRows - 1 &&
        period * (times + 1) - row < s.length) {
        str += s[period * (times + 1) - row]
      }
    }
  }

  return str
}

export default convert
