import defaultComparator from '../compare-function'

export default function QuickSort (array, compareFunction = defaultComparator) {
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
