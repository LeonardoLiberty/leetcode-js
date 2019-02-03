
class Heap {
  constructor (comparator) {
    this.holder = []
    this.comparator = comparator
  }

  swap (index1, index2) {
    const temp = this.holder[index1]
    this.holder[index1] = this.holder[index2]
    this.holder[index2] = temp
  }

  up (startIndex = this.holder.length - 1) {
    if (startIndex === 0) return
    const parentIndex = Math.floor((startIndex - 1) / 2)
    if (this.comparator(this.holder[parentIndex], this.holder[startIndex]) > 0) {
      this.swap(parentIndex, startIndex)
      this.up(parentIndex)
    }
  }

  down (startIndex = 0) {
    const len = this.holder.length
    if (len < 2) return
    const leftChildIndex = Math.floor(startIndex * 2 + 1)
    const rightChildIndex = Math.floor(startIndex * 2 + 2)
    if (rightChildIndex < len &&
      this.comparator(this.holder[startIndex], this.holder[rightChildIndex]) > 0) {
      if (this.comparator(this.holder[leftChildIndex], this.holder[rightChildIndex]) > 0) {
        this.swap(startIndex, rightChildIndex)
        this.down(rightChildIndex)
      } else {
        this.swap(startIndex, leftChildIndex)
        this.down(leftChildIndex)
      }
    } else if (leftChildIndex < len &&
      this.comparator(this.holder[startIndex], this.holder[leftChildIndex]) > 0) {
      this.swap(startIndex, leftChildIndex)
      this.down(leftChildIndex)
    }
  }

  insert (item) {
    this.holder.push(item)
    this.up()
    return item
  }

  peek () {
    return this.holder[0]
  }

  pop () {
    if (this.holder.length < 2) return this.holder.pop()
    const re = this.holder[0]
    this.holder[0] = this.holder.pop()
    this.down()
    return re
  }
}

const minHeap = new Heap((a, b) => a - b)
const maxHeap = new Heap((a, b) => b - a)

// num of total elements
let isOdd = true

function Insert (num) {
  if (isOdd) {
    if (num > minHeap.peek()) {
      minHeap.insert(num)
      maxHeap.insert(minHeap.pop())
    } else {
      maxHeap.insert(num)
    }
  } else {
    if (num < maxHeap.peek()) {
      maxHeap.insert(num)
      minHeap.insert(maxHeap.pop())
    } else {
      minHeap.insert(num)
    }
  }
  isOdd = !isOdd
}
function GetMedian () {
  if (isOdd) {
    return (minHeap.peek() + maxHeap.peek()) / 2
  } else {
    return maxHeap.peek()
  }
}

export default { Insert, GetMedian }
