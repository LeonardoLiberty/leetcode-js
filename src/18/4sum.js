/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let re = []

  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 3; ++i) {
    let min = nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3]
    if (min > target) break
    if (nums[i - 1] === nums[i]) continue
    for (let j = i + 1; j < nums.length - 2; ++j) {
      let min = nums[i] + nums[j] + nums[j + 1] + nums[j + 2]
      if (min > target) break
      // at least after one loop
      if (j > i + 1 && nums[j - 1] === nums[j]) continue

      for (let k = j + 1, l = nums.length - 1; k < l;) {
        let sum = nums[i] + nums[j] + nums[k] + nums[l]
        if (sum === target) {
          re.push([nums[i], nums[j], nums[k], nums[l]])
          while (k++ < l && nums[k - 1] === nums[k]);
          while (k < l-- && nums[l] === nums[l + 1]);
        } else if (sum < target) {
          while (k++ < l && nums[k - 1] === nums[k]);
        } else {
          while (k < l-- && nums[l] === nums[l + 1]);
        }
      }
    }
  }
  return re
}
export default fourSum
