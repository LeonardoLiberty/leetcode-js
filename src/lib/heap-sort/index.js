import defaultComparator from '../compare-function'
import Heap from '../heap'

export default function HeapSort (
  array,
  compareFunction = defaultComparator
) {
  let sortedArray = []
  let heap = new Heap(array, compareFunction)
  while (true) {
    const item = heap.poll()
    if (item === null) return sortedArray
    sortedArray.push(item)
  }
}
