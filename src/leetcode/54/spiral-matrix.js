/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) { return [] }

  const RIGHT = 0
  const DOWN = 1
  const LEFT = 2
  const UP = 3

  const m = matrix.length
  const n = matrix[0].length

  let rightBorder = n
  let downBorder = m
  let leftBorder = -1
  let upBorder = 0

  let re = []
  let curDirection = RIGHT
  let curX = 0
  let curY = 0

  while (re.length !== m * n) {
    switch (curDirection) {
      case RIGHT: {
        if (curY + 1 !== rightBorder) {
          re.push(matrix[curX][curY])
          curY = curY + 1
        } else {
          // hit border
          rightBorder = rightBorder - 1
          curDirection = DOWN
        }
        break
      }
      case DOWN: {
        if (curX + 1 !== downBorder) {
          re.push(matrix[curX][curY])
          curX = curX + 1
        } else {
          downBorder = downBorder - 1
          curDirection = LEFT
        }
        break
      }
      case LEFT: {
        if (curY - 1 !== leftBorder) {
          re.push(matrix[curX][curY])
          curY = curY - 1
        } else {
          leftBorder = leftBorder + 1
          curDirection = UP
        }
        break
      }
      case UP: {
        if (curX - 1 !== upBorder) {
          re.push(matrix[curX][curY])
          curX = curX - 1
        } else {
          upBorder = upBorder + 1
          curDirection = RIGHT
        }
        break
      }
    }
  }
  return re
}

module.exports = spiralOrder
