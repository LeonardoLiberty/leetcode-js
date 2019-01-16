function Find (target, array) {
  let curX = array.length - 1
  let curY = 0

  while (curX > -1 && curY < array[0].length) {
    if (target === array[curX][curY]) return true
    else if (target > array[curX][curY]) curY++
    else curX--
  }
  return false
}

export default Find
