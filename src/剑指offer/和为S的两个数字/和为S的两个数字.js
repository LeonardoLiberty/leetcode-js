function FindNumbersWithSum (array, sum) {
  let re = []
  let pLow = 0
  let pHigh = array.length - 1
  while (pLow < pHigh) {
    const tempSum = array[pLow] + array[pHigh]
    if (tempSum === sum) {
      re = [array[pLow], array[pHigh]]
      break
    } else if (tempSum > sum) {
      pHigh--
    } else {
      pLow++
    }
  }
  return re
}

export default FindNumbersWithSum
