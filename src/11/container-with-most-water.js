/**
 * @param {number[]} height
 * @return {number}
 */
var maxAreaBF = function (height) {
  var len = height.length
  var leftHeight = 0
  var rightHeight = 0
  var max = 0
  for (let i = 0; i < len; ++i) {
    if (height[i] <= leftHeight) {
      // console.log(i, height[i])
      continue
    }
    for (let j = len - 1; j > i; --j) {
      // can't be <= since in a new outer loop
      // we may have a better height[i] to match
      // the same height[j].
      if (height[j] < rightHeight) continue
      let area = (j - i) * Math.min(height[i], height[j])
      if (max < area) {
        max = area
        leftHeight = height[i]
        rightHeight = height[j]
      }
    }
  }
  return max
}

//  -------- better O(n) solution ----------------
//  proof of the correctness
//  https://leetcode.com/problems/container-with-most-water/discuss/6099/Yet-another-way-to-see-what-happens-in-the-O(n)-algorithm

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  const calArea = () =>
    (right - left) * Math.min(height[left], height[right])
  let max = calArea(left, right)

  while (left < right) {
    if (height[left] < height[right]) {
      left++
    } else if (height[left] > height[right]) {
      right--
    } else {
      // height[left] === height[right] case
      left++
      right--
    }
    let newMax = calArea()
    if (newMax > max) { max = newMax }
  }
  return max
}

module.exports = maxArea
