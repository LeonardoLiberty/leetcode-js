/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = new Array(n + 1)
  for (let i = 0; i <= n; ++i) {
    if (i === 0) dp[i] = 1
    else if (i === 1) dp[i] = 1
    else dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

export default climbStairs
