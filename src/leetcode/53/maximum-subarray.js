/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let curLeftSum = 0
  let curMax

  for (const num of nums) {
    curLeftSum += num
    if (curMax === undefined || curLeftSum > curMax) {
      curMax = curLeftSum
    }
    if (curLeftSum < 0) {
      curLeftSum = 0
    }
  }
  return curMax
}
export default maxSubArray
