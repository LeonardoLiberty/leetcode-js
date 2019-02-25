/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let leftBra = 0
  let rightBra = 0
  let maxLen = 0

  for (const each of s) {
    if (each === '(') {
      leftBra++
    } else {
      rightBra++
      if (leftBra === rightBra) {
        maxLen = maxLen > leftBra ? maxLen : leftBra
      } else if (rightBra > leftBra) {
        leftBra = 0
        rightBra = 0
      }
    }
  }

  leftBra = 0
  rightBra = 0
  for (const each of s.split('').reverse().join('')) {
    if (each === ')') {
      rightBra++
    } else {
      leftBra++
      if (leftBra === rightBra) {
        maxLen = maxLen > leftBra ? maxLen : leftBra
      } else if (leftBra > rightBra) {
        leftBra = 0
        rightBra = 0
      }
    }
  }

  return maxLen * 2
}

export default longestValidParentheses
