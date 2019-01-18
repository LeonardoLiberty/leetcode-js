// 牛逼啊 大神在民间
function NumberOf1 (n) {
  let cnt = 0
  while (n) {
    cnt++
    n = n & (n - 1)
  }
  return cnt
}

export default NumberOf1
