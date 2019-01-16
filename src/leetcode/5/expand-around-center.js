/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let m = 0
  let n = 0
  for (let i = 0; i < s.length; ++i) {
    let len1 = expand(s, i, i)
    let len2 = expand(s, i, i + 1)
    let len = Math.max(len1, len2)

    if (len > n - m + 1) {
      if (len % 2 === 0) {
        let radius = len / 2 - 1
        m = i - radius
        n = i + 1 + radius
      } else {
        let radius = (len - 1) / 2
        m = i - radius
        n = i + radius
      }
    }
  }

  return s.substring(m, n + 1)
}

function expand (s, left, right) {
  let len = 0
  while (left > -1 && right < s.length && s[left] === s[right]) {
    len = right - left + 1
    --left
    ++right
  }
  return len
}

export default longestPalindrome
