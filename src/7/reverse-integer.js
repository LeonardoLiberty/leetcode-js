/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MIN = -Math.pow(2, 31)
  const MAX = Math.pow(2, 31) - 1
  const NEG = x < 0

  // -403 % 10 = -3
  // 403 % 10 = 3
  let re = 0
  while (x !== 0) {
    re = re * 10 + x % 10
    x = NEG ? Math.ceil(x / 10) : Math.floor(x / 10)
    if (re < MIN || re > MAX) return 0
  }

  return re
}

module.exports = reverse
