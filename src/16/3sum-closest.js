/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // must have exactly one solution
  const getDistance = (a, b) => Math.abs(a - b)
  nums.sort((a, b) => a - b)
  let re = nums[0] + nums[1] + nums[2]

  for (let i = 0; i < nums.length - 2; ++i) {
    let min = nums[i] + nums[i + 1] + nums[i + 2]
    let max = nums[i] + nums[nums.length - 1] + nums[nums.length - 2]
    if (min > target) {
      let newDistance = getDistance(min, target)
      let oldDistance = getDistance(re, target)
      re = newDistance < oldDistance ? min : re
      break
    }
    if (nums[i] === nums[i - 1]) continue
    if (max < target) {
      let newDistance = getDistance(max, target)
      let oldDistance = getDistance(re, target)
      re = newDistance < oldDistance ? max : re
      continue
    }

    for (let j = i + 1, k = nums.length - 1; j < k;) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === target) {
        return target
      } else {
        let newDistance = getDistance(sum, target)
        let oldDistance = getDistance(re, target)
        re = newDistance < oldDistance ? sum : re
        if (sum > target) {
          while (j < k-- && nums[k] === nums[k + 1]);
        } else {
          while (j++ < k && nums[j - 1] === nums[j]);
        }
      }
    }
  }
  return re
}

export default threeSumClosest
