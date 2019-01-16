/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let prev
  for (let i = 0; i < nums.length;) {
    if (prev !== nums[i]) {
      prev = nums[i]
      i++
    } else {
      nums.splice(i, 1)
    }
  }
  return nums.length
}

export default removeDuplicates
