/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const hashTable = {}
  const re = []
  for (const each of nums1) {
    hashTable[each] = hashTable[each] ? hashTable[each] + 1 : 1
  }

  for (const each of nums2) {
    if (hashTable[each]) {
      re.push(each)
      hashTable[each]--
    }
  }

  return re
}

export default intersect
