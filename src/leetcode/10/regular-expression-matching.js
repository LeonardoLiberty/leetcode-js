//  ------------ DP (Using space to gain time) -----------------
//       can just be regarded as advanced recursion
var isMatch = function (s, p) {
  if (p[0] === '*' || p.indexOf('**') !== -1) return false

  let dpTable = []
  for (let i = 0; i <= s.length; ++i) {
    dpTable.push(new Array(p.length + 1))
  }
  var helper = function (i, j) {
    if (dpTable[i][j] !== undefined) return dpTable[i][j]

    if (p.length === j) {
      dpTable[i][j] = s.length === i
    } else if (s.length === i) {
      dpTable[i][j] = p[j + 1] === '*' && helper(i, j + 2)
    } else {
      let firstMatch = s[i] === p[j] || p[j] === '.'
      if (p[j + 1] === '*') {
        dpTable[i][j] = helper(i, j + 2) || (firstMatch && helper(i + 1, j))
      } else {
        dpTable[i][j] = firstMatch && helper(i + 1, j + 1)
      }
    }

    return dpTable[i][j]
  }
  return helper(0, 0)
}

module.exports = isMatch
