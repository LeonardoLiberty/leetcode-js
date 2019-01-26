
function InversePairs (data) {
  function helper (data) {
    const len = data.length
    if (len <= 1) return data
    const mid = Math.floor(len / 2)
    const array1 = helper(data.slice(0, mid))
    const array2 = helper(data.slice(mid, len))
    let index1 = 0
    let index2 = 0

    let sortedArray = []
    while (index1 !== array1.length || index2 !== array2.length) {
      if (index1 === array1.length) {
        sortedArray.push(array2[index2++])
      } else if (index2 === array2.length) {
        sortedArray.push(array1[index1++])
      } else if (array1[index1] <= array2[index2]) {
        sortedArray.push(array1[index1++])
      } else {
        sortedArray.push(array2[index2++])
        cnt += array1.length - index1
        cnt %= 1000000007
      }
    }
    return sortedArray
  }
  let cnt = 0
  helper(data)
  return cnt
}

export default InversePairs
