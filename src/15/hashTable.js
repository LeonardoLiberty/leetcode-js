// also O(n^2), but slower than
// non-hash solution, may because
// of hash table creating process ?

// TODO can still be optimized
var threeSum = function (nums) {
  let re = []

  // nlogn
  nums.sort((a, b) => a - b)

  // n
  let numIndexTable = {}
  for (let i = 0; i < nums.length; ++i) {
    if (numIndexTable[nums[i]] === undefined) {
      numIndexTable[nums[i]] = [i]
    } else {
      numIndexTable[nums[i]].push(i)
    }
  }

  // n^2
  for (let i = 0; i < nums.length; ++i) {
    // never check the same num twice
    if (nums[i] > 0) break
    if (numIndexTable[nums[i]][0] < i) continue
    let lastJnum
    for (let j = i + 1; j < nums.length - 1; ++j) {
      // never check the same num twice
      let target = -(nums[i] + nums[j])
      if (target < nums[j]) break
      if (lastJnum !== undefined && lastJnum === nums[j]) continue
      lastJnum = nums[j]

      let indexSet = numIndexTable[target]
      if (indexSet && indexSet[indexSet.length - 1] > j) {
        re.push([nums[i], nums[j], target])
        // never check the same num twice
        continue
      }
    }
  }

  return re
}

export default threeSum
