/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false

  let oldX = x
  let y = 0
  while (x !== 0) {
    y = y * 10 + x % 10
    x = Math.trunc(x / 10)
  }
  return oldX === y
}

export default isPalindrome
