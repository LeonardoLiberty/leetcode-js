function FindGreatestSumOfSubArray (array) {
  if (!array || array.length === 0) return 0
  const len = array.length

  let curSum = 0
  let max

  for (let i = 0; i < len; ++i) {
    curSum += array[i]
    if (max === undefined || max < curSum) max = curSum
    if (curSum < 0) curSum = 0
  }

  return max
}

export default FindGreatestSumOfSubArray
