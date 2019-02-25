/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function (s, p) {
  // dp[i][j] means isMatch(s.substr(0, i), p.substr(0, j))
  // 也就是s的前i个和p的前j个 不包括 s[i]/p[j]

  // 1. dp[0][0] = true
  // 2. dp[i][0] = false except dp[0][0] = true
  // 3. dp[0][n] = p[0] to p[n - 1] all star
  // 2. dp[i][j] = (dp[i-1][j] && p[j-1] === '*') ||
  //               (dp[i][j-1] && p[j-1] === '*') ||
  //               ((s[i-1] === p[j-1] || p[j-1] === '?') && dp[i-1][j-1])

  let dp = []
  for (let i = 0; i <= s.length; ++i) {
    dp.push(new Array(p.length + 1))
  }

  for (let j = 0; j <= p.length; ++j) {
    for (let i = 0; i <= s.length; ++i) {
      if (j === 0) {
        // dp[i][0] = false except dp[0][0] = true
        dp[i][j] = i === 0
      } else if (i === 0) {
        // j !== 0
        // dp[0][n] => p must be  all * to match empty str s
        dp[i][j] = dp[0][j - 1] && p[j - 1] === '*'
      } else {
        // i !== 0 && j !== 0
        dp[i][j] = (dp[i - 1][j] && p[j - 1] === '*') ||
          (dp[i][j - 1] && p[j - 1] === '*') ||
          (dp[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '?'))
      }
    }
  }

  return dp[s.length][p.length]
}

export default isMatch
