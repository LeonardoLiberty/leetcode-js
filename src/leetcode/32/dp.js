/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // dp[i] indicates the longestValidParentheses from 0-i that ends at position i
  const dp = [0]
  for (let i = 1; i < s.length; ++i) {
    if (s[i] === '(') {
      dp[i] = 0
    } else {
      if (s[i - 1] === '(') {
        // case like  ...()
        // in case i - 2 < 0
        dp[i] = (dp[i - 2] || 0) + 2
      } else {
        // case like ...))
        if (s[i - dp[i - 1] - 1] === '(') {
          dp[i] = (dp[i - dp[i - 1] - 2] || 0) + (dp[i - 1] || 0) + 2
        } else {
          dp[i] = 0
        }
      }
    }
  }
  return Math.max.apply(null, dp)
}

export default longestValidParentheses
