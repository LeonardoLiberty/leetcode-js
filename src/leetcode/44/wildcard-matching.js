/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// 关键思路在于
//   如果匹配到*, 默认直接跳过(也就是让*匹配0个字母), 跳过之后之后如果再次碰到*, 可以忽略上一个*, 也就是说
//   只记录上一次的*, 原因在于如果正确的匹配方式是让前一个*匹配更多的字母, 那么既然到了当前*的位置, 用当前的
//   这个*匹配更多的字母也是一样的效果

//   这一点大量减少了回溯的次数, 非常聪明
var isMatch = function (s, p) {
  let i = 0
  let j = 0
  let lastMatchIndex = -1
  let lastStarIndex = -1

  while (i < s.length) {
    if (s[i] === p[j] || p[j] === '?') {
      i++
      j++
    } else if (p[j] === '*') {
      j++
      lastMatchIndex = i
      lastStarIndex = j
    } else if (lastStarIndex !== -1) {
      lastMatchIndex++
      i = lastMatchIndex
      j = lastStarIndex
    } else {
      return false
    }
  }

  while (j < p.length) {
    if (p[j] !== '*') {
      return false
    }
    j++
  }

  return true
}

export default isMatch
