/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MIN = -Math.pow(2, 31)
  const MAX = Math.pow(2, 31) - 1

  let re = 0
  while (x !== 0) {
    re = re * 10 + x % 10
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
    if (re > MAX || re < MIN) { return 0 }
  }
  return re
}

export default reverse