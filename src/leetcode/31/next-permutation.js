/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let left = 0
  let right = nums.length - 1
  for (let i = nums.length - 1; i > 0; --i) {
    if (nums[i] > nums[i - 1]) {
      // i-1的值小于i的值, 即第一次出现前一个值小于后一个值
      // 可以考虑将后面较大的值换到该位置来获得一个字典序更大的值
      // 所以现在的目的是找最接近该值的下一个值
      let curIndex = i
      for (let j = i + 1; j < nums.length; ++j) {
        if (nums[j] <= nums[i - 1]) {
          curIndex = j - 1
          break
        }

        if (j === nums.length - 1) {
          curIndex = j
        }
      }

      [nums[i - 1], nums[curIndex]] = [nums[curIndex], nums[i - 1]]

      left = i
      break
    }
  }

  // reverse in-place
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }

  return nums
}

export default nextPermutation
