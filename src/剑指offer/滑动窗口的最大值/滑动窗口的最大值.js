function maxInWindows (num, size) {
  if (!num || !size || num.length < size) return []
  const re = []
  const queue = []

  let leftIndex = 0
  let rightIndex = size - 1
  for (let i = 0; i < num.length; ++i) {
    while (queue.length !== 0 && num[i] >= num[queue[queue.length - 1]]) queue.pop()
    queue.push(i)
    while (queue[0] < leftIndex) queue.shift()
    if (i === rightIndex) {
      re.push(num[queue[0]])
      leftIndex++
      rightIndex++
    }
  }

  return re
}

export default maxInWindows
