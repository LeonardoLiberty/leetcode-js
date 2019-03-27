/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let re = []

  // find leftmost
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target && nums[mid - 1] !== target) {
      re.push(mid)
      break
    } else if (nums[mid] >= target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  if (left > right) return [-1, -1]

  left = 0
  right = nums.length - 1
  // find rightmost
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target && nums[mid + 1] !== target) {
      re.push(mid)
      break
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return re
}

export default searchRange
