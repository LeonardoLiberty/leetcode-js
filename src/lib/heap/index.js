import defaultComparator from '../compare-function'

export default class Heap {
  constructor (array = [], compareFunction = defaultComparator) {
    if (new.target !== Heap) {
      throw new TypeError('Cannot construct heap directly !')
    }

    this.heapContainer = array
    this.compareFunction = compareFunction
    this.heapify()
  }

  getLeftChildIndex (parentIndex) {
    return (2 * parentIndex) + 1
  }

  getRightChildIndex (parentIndex) {
    return (2 * parentIndex) + 2
  }

  getParentIndex (childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  hasParent (childIndex) {
    return this.getParentIndex(childIndex) >= 0
  }

  hasLeftChild (parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length
  }

  hasRightChild (parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length
  }

  leftChild (parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)]
  }

  rightChild (parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)]
  }

  parent (childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)]
  }

  swap (indexOne, indexTwo) {
    const temp = this.heapContainer[indexOne]
    this.heapContainer[indexOne] = this.heapContainer[indexTwo]
    this.heapContainer[indexTwo] = temp
  }

  peek () {
    if (this.heapContainer.length === 0) return null

    return this.heapContainer[0]
  }

  poll () {
    if (this.heapContainer.length === 0) return null
    if (this.heapContainer.length === 1) return this.heapContainer.pop()

    const item = this.heapContainer[0]
    this.heapContainer[0] = this.heapContainer.pop()
    this.heapifyDown()
    return item
  }

  add (item) {
    this.heapContainer.push(item)
    this.heapifyUp()
    return this
  }

  heapifyDown (customStartIndex = 0) {
    let currentIndex = customStartIndex
    let nextIndex = null

    while (this.hasLeftChild(currentIndex)) {
      if (this.hasRightChild(currentIndex) &&
        this.compareFunction(
          this.leftChild(currentIndex),
          this.rightChild(currentIndex)) >= 0) {
        nextIndex = this.getRightChildIndex(currentIndex)
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex)
      }

      if (this.compareFunction(
        this.heapContainer[currentIndex],
        this.heapContainer[nextIndex]) < 0) {
        break
      }

      this.swap(currentIndex, nextIndex)
      currentIndex = nextIndex
    }
  }

  heapifyUp (customStartIndex) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1

    while (this.hasParent(currentIndex) &&
      this.compareFunction(this.parent(currentIndex), this.heapContainer[currentIndex]) >= 0) {
      this.swap(currentIndex, this.getParentIndex(currentIndex))
      currentIndex = this.getParentIndex(currentIndex)
    }
  }

  heapify () {
    if (this.heapContainer.length <= 1) return
    let currentIndex = Math.floor(this.heapContainer.length / 2) - 1
    for (; currentIndex >= 0; currentIndex--) {
      this.heapifyDown(currentIndex)
    }
  }
}
