import defaultComparator from '../compare-function'

export default function MergeSort (array, compareFunction = defaultComparator) {
  if (array.length <= 1) return array

  const middileIndex = Math.floor(array.length / 2)
  const leftSortedArray = MergeSort(array.slice(0, middileIndex), compareFunction)
  const rightSortedArray = MergeSort(array.slice(middileIndex, array.length), compareFunction)
  return arrayMerge(leftSortedArray, rightSortedArray, compareFunction)
}

function arrayMerge (array1, array2, compareFunction) {
  const sortedArray = []
  while (array1.length !== 0 || array2.length !== 0) {
    if (array1.length === 0) sortedArray.push(array2.shift())
    else if (array2.length === 0) sortedArray.push(array1.shift())
    else if (compareFunction(array1[0], array2[0]) <= 0) {
      sortedArray.push(array1.shift())
    } else {
      sortedArray.push(array2.shift())
    }
  }
  return sortedArray
}
