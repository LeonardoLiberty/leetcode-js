/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
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

module.exports = maxArea
