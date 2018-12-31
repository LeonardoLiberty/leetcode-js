
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let dpTable = []
  let m = 0
  let n = 0
  for (let i = 0; i < s.length; ++i) {
    let each = new Array(s.length)
    dpTable.push(each)
  }

  for (let i = 0; i < s.length; ++i) {
    for (let j = 0; j < s.length; ++j) {
      dpTable[i][j] = dp(i, j)
      if (dpTable[i][j] && n - m < j - i) {
        n = j
        m = i
      }
    }
  }

  function dp (i, j) {
    if (dpTable[i][j] !== undefined) return dpTable[i][j]

    if (j <= i) {
      dpTable[i][j] = true
    } else {
      dpTable[i][j] = s[i] === s[j] && dp(i + 1, j - 1)
    }
    return dpTable[i][j]
  }

  return s.substring(m, n + 1)
}

export default longestPalindrome
