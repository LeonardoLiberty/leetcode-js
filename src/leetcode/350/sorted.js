/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (num1, num2) {
  const re = []

  num1.sort((a, b) => a - b)
  num2.sort((a, b) => a - b)
  let i = 0
  let j = 0
  while (i < num1.length && j < num2.length) {
    if (num1[i] < num2[j]) {
      i++
    } else if (num1[i] > num2[j]) {
      j++
    } else {
      re.push(num1[i])
      i++
      j++
    }
  }

  return re
}

export default intersect
