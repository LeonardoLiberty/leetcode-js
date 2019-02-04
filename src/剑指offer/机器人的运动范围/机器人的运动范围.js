
function movingCount (threshold, rows, cols) {
  function isValid (x, y) {
    if (x < 0 || y < 0 || x >= rows || y >= cols) return false

    let sum = 0
    while (x !== 0) {
      sum += x % 10
      x = Math.floor(x / 10)
    }
    while (y !== 0) {
      sum += y % 10
      y = Math.floor(y / 10)
    }
    return sum <= threshold
  }
  function moveTo (x, y) {
    if (!isValid(x, y) || alreadyVisited[x * cols + y]) return
    alreadyVisited[x * cols + y] = true
    stepCount++
    moveTo(x + 1, y)
    moveTo(x - 1, y)
    moveTo(x, y + 1)
    moveTo(x, y - 1)
  }

  const alreadyVisited = new Array(rows * cols)
  let stepCount = 0
  moveTo(0, 0)
  return stepCount
}

export default movingCount
