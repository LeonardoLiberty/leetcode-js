/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let re = []

  // nlogn
  nums.sort((a, b) => a - b)

  // n^2
  for (let i = 0; i < nums.length - 2; ++i) {
    // the first must be non positive
    if (nums[i] > 0) break
    // never check the same num twice
    if (nums[i - 1] === nums[i]) continue

    // i.e. find nums[j] + nums[k] === -nums[-i]
    // in a sorted array only requires O(n)
    for (let j = i + 1, k = nums.length - 1; j < k;) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        re.push([nums[i], nums[j], nums[k]])
        j++
        k--
        while (j < k && nums[j - 1] === nums[j]) {
          j++
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--
      } else {
        j++
      }
    }
  }

  return re
}

export default threeSum
