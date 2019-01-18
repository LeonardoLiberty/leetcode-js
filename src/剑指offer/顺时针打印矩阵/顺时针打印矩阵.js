// 傻逼题目天坑
// 说打印实际返回, 影响爸爸通过率
function printMatrix (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let re = []

  let startX = 0
  let startY = -1

  while (m > 0 && n > 0) {
    // right n
    for (let i = 0; i < n; ++i) {
      startY++
      re.push(matrix[startX][startY])
    }
    if (m === 1) break
    // down m - 1
    for (let i = 0; i < m - 1; ++i) {
      startX++
      re.push(matrix[startX][startY])
    }
    if (n === 1) break
    // left n - 1
    for (let i = 0; i < n - 1; ++i) {
      startY--
      re.push(matrix[startX][startY])
    }
    // up m - 2
    for (let i = 0; i < m - 2; ++i) {
      startX--
      re.push(matrix[startX][startY])
    }
    m -= 2
    n -= 2
  }
  return re
}

export default printMatrix
