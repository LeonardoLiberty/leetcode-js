function hasPath (matrix, rows, cols, path) {
  function makeTable () {
    const table = []
    for (let i = 0; i < rows; ++i) {
      table.push(new Array(cols))
    }
    return table
  }

  function tryPath (startX, startY, pathIndex) {
    if (pathIndex === path.length) return true
    if (startX < 0 || startX >= rows || startY < 0 || startY >= cols) return false
    if (matrix[startX][startY] !== path[pathIndex] || visitedTable[startX][startY]) return false
    visitedTable[startX][startY] = true
    return tryPath(startX - 1, startY, pathIndex + 1) ||
      tryPath(startX + 1, startY, pathIndex + 1) ||
      tryPath(startX, startY - 1, pathIndex + 1) ||
      tryPath(startX, startY + 1, pathIndex + 1)
  }

  let visitedTable
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      visitedTable = makeTable()
      if (tryPath(i, j, 0)) return true
    }
  }

  return false
}

export default hasPath
