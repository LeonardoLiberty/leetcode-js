/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length
  const record = []
  for (let i = 0; i < len; ++i) {
    record.push(new Array(len))
  }
  let longestIndex = [0, 0]

  for (let curLen = 1; curLen <= len; ++curLen) {
    for (let start = 0; start + curLen - 1 < len; ++start) {
      let end = start + curLen - 1
      if (curLen === 1) record[start][end] = true
      else if (curLen === 2) record[start][end] = s[start] === s[end]
      else record[start][end] = s[start] === s[end] && record[start + 1][end - 1]

      if (record[start][end] && curLen > longestIndex[1]) {
        longestIndex = [start, curLen]
      }
    }
  }
  return s.substr(longestIndex[0], longestIndex[1])
}

export default longestPalindrome
