/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // bf
  // for (let i = 0; i < nums.length; ++i) {
  //   for (let j = i + 1; j < nums.length; ++j) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j]
  //     }
  //   }
  // }

  // quick sort, n * binary search

  // hash table, n * 1
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
        if (hashTable[num].length === 1) continue
        // two num with the same value
        return [hashTable[num][0], hashTable[num][1]]
      }
      return [index, hashTable[target - num][0]]
    }
  }
}

export default twoSum
