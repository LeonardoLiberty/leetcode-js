/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const table = {}
  for (let row = 0; row < board.length; ++row) {
    for (let col = 0; col < board[row].length; ++col) {
      const value = board[row][col]
      if (value === '.') {
        continue
      }
      const sub = Math.floor(row / 3) * 3 + Math.floor(col / 3)
      if (table[`row${row}${value}`] ||
              table[`col${col}${value}`] ||
              table[`sub${sub}${value}`]) {
        return false
      }
      table[`row${row}${value}`] = true
      table[`col${col}${value}`] = true
      table[`sub${sub}${value}`] = true
    }
  }
  // console.log(table)
  return true
}

export default isValidSudoku
