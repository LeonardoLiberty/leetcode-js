/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const swap = (i, j) => {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  let len = nums.length
  let left = 0
  let right = len - 1
  while (left <= right) {
    if (nums[left] === val) {
      swap(left, right)
      right--
      len--
    } else {
      left++
    }
  }
  return len
}

export default removeElement
