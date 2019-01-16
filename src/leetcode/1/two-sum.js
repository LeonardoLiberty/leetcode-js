/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // hash table, n * 1
  // each entry is a list
  const hashTable = {}
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index]

    hashTable[num] = hashTable[num]
      ? hashTable[num].concat(index) : [index]
  }

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index]
    if (hashTable[target - num]) {
      if (target - num === num) {
        // two num with the same value, but
        // we only have one. I.e. can't use
        // each num twice.
        if (hashTable[num].length === 1) continue

        return [hashTable[num][0], hashTable[num][1]]
      }
      return [index, hashTable[target - num][0]]
    }
  }
}

export default twoSum
