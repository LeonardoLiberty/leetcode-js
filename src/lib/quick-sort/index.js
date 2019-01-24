import defaultComparator from '../compare-function'

export default function QuickSort (
  array,
  compareFunction = defaultComparator,
  inplace = true
) {
  if (inplace) return QuickSortInPlace(array, compareFunction)
  // do not change the original array
  const workingArray = [...array]

  if (array.length <= 1) return array

  // using the first element as the pivot
  const pivotElement = workingArray.shift()
  const leftPart = []
  const rightPart = []
  const midPart = [pivotElement]

  while (workingArray.length) {
    const currentElement = workingArray.shift()
    if (compareFunction(currentElement, pivotElement) === 0) {
      midPart.push(currentElement)
    } else if (compareFunction(currentElement, pivotElement) < 0) {
      leftPart.push(currentElement)
    } else {
      rightPart.push(currentElement)
    }
  }

  const leftPartSorted = QuickSort(leftPart, compareFunction)
  const rightPartSorted = QuickSort(rightPart, compareFunction)
  return leftPartSorted.concat(midPart, rightPartSorted)
}

function QuickSortInPlace (
  array,
  compareFunction = defaultComparator,
  inputLowIndex = 0,
  inputHightIndex = array.length - 1
) {
  const partitionArray = (lowIndex, highIndex) => {
    const swap = (leftIndex, rightIndex) => {
      const temp = array[leftIndex]
      array[leftIndex] = array[rightIndex]
      array[rightIndex] = temp
    }

    const pivot = array[highIndex]
    let partitionIndex = lowIndex
    for (let currentIndex = lowIndex; currentIndex < highIndex; ++currentIndex) {
      if (compareFunction(array[currentIndex], pivot) < 0) {
        swap(partitionIndex++, currentIndex)
      }
    }

    swap(partitionIndex, highIndex)

    return partitionIndex
  }

  if (inputLowIndex < inputHightIndex) {
    const partitionIndex = partitionArray(inputLowIndex, inputHightIndex)
    QuickSortInPlace(array, compareFunction, inputLowIndex, partitionIndex - 1)
    QuickSortInPlace(array, compareFunction, partitionIndex + 1, inputHightIndex)
  }

  return array
}
