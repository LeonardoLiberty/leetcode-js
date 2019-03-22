/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums) return -1

  let left = 0
  let right = nums.length - 1
  let normalBinarySearch
  while (left <= right) {
    normalBinarySearch = nums[left] < nums[right]
    const mid = Math.floor((left + right) / 2)
    // console.log(mid, nums[mid])
    if (nums[mid] === target) return mid

    if (normalBinarySearch) {
      if (target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      // no rotate from left to mid
      if (nums[mid] >= nums[left]) {
        if (target < nums[mid] && target >= nums[left]) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      } else {
        if (target > nums[mid] && target <= nums[right]) {
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
    }
  }
  return -1
}
export default search
