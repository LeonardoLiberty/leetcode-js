/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // 利用数组拥有 0 ~ nums.length-1空间来存放 1 ~ nums.length 个数
  // 如果数组中的数是负数或者超出这个范围则忽略不管
  // 对于在范围内的数逐一填充到正确的位置
  // e.g. nums[i]等于1, 则把1放在数组的第一个位置即nums[0]
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > 0 && nums[i] < nums.length + 1 && nums[nums[i] - 1] !== nums[i]) {
      // [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
      // 似乎上述ES6方式交换两个变量, 速度更慢
      const temp = nums[nums[i] - 1]
      nums[nums[i] - 1] = nums[i]
      nums[i] = temp
      --i
    }
  }

  // 遍历数组, 一旦发现某个数不是预期的数, 比如第二个位置的数应该是2
  // 说明预期的数并不存在于数组中, 此时说明该数缺席, 直接返回即可
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== i + 1) return i + 1
  }

  return nums.length + 1
}

export default firstMissingPositive
