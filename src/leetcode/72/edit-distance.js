/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length
  const n = word2.length
  const dp = []
  for (let i = 0; i <= m; ++i) {
    dp[i] = new Array(n + 1)
  }

  for (let i = 0; i <= m; ++i) {
    for (let j = 0; j <= n; ++j) {
      if (i === 0) dp[i][j] = j
      else if (j === 0) dp[i][j] = i
      // 要么 "abcd" "xyzd" => 直接不用考虑d => 等效于 "abc" "xyz"
      else if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1]
      else {
        // 如果该字母不匹配, 那么我们有三种方式可以让他匹配
        // 假设是 "abcn"  "xyzd"
        // 1. 插入: 先 "abcn" "xyz" 再插入 d
        // 2. 删除: 先删除 n 再 "abc" "xyzd"
        // 3. 替换: 先 "abc" "xyz" 再 n 换 d
        // 选择最小的即可
        const insert = dp[i][j - 1] + 1
        const _delete = dp[i - 1][j] + 1
        const replace = dp[i - 1][j - 1] + 1
        dp[i][j] = Math.min(insert, _delete, replace)
      }
    }
  }
  return dp[m][n]
}

export default minDistance
