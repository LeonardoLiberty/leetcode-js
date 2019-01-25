export default function GetLeastNumbersSolution (input, k) {
  // somewhat like quicksort, average O(n)
  // but not guarantee the output are sorted
  const len = input.length
  if (len === 0 || k > len || k <= 0) return []
  if (len === k) return input

  let curK = partition() + 1
  if (curK === k) return input.slice(0, k)
  else if (curK > k) {
    return GetLeastNumbersSolution(input.slice(0, curK - 1), k)
  } else {
    let leftPart = input.slice(0, curK)
    let rightPart = input.slice(curK, len)
    k -= curK
    return leftPart.concat(GetLeastNumbersSolution(rightPart, k))
  }

  function partition () {
    function swap (i, j) {
      const temp = input[i]
      input[i] = input[j]
      input[j] = temp
    }
    const pivot = input[len - 1]
    let swapIndex = 0
    for (let i = 0; i < len - 1; ++i) {
      if (input[i] < pivot) swap(swapIndex++, i)
    }
    swap(swapIndex, len - 1)
    return swapIndex
  }
}
