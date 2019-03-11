/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let shouldNegative = false
  if (dividend < 0 && divisor < 0) {
    dividend = -dividend
    divisor = -divisor
  } else if (dividend < 0) {
    dividend = -dividend
    shouldNegative = true
  } else if (divisor < 0) {
    divisor = -divisor
    shouldNegative = true
  }

  // both dividend divisor non-negative
  let count = 0
  while (dividend >= divisor) {
    let curSum = divisor
    let curCount = 1
    while (dividend >= curSum + curSum) {
      curSum += curSum
      curCount += curCount
    }
    dividend -= curSum
    count += curCount
  }

  count = shouldNegative ? -count : count
  if (count < -Math.pow(2, 31) || count > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  }
  return count
}

export default divide
