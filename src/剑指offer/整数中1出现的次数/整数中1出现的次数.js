// http://www.cnblogs.com/cyjb/p/digitOccurrenceInRegion.html
function NumberOf1Between1AndNSolution (n) {
  let cnt = 0
  let i = 1 // 1表示个位， 10表示十位， 100表示百位...
  let times // 高位
  let cur // 当前位
  while (n / i >= 1) {
    times = Math.floor(n / i / 10)
    cnt += times * i
    cur = Math.floor(n / i) % 10
    if (cur > 1) {
      cnt += i
    } else if (cur === 1) {
      cnt += (n % i) + 1
    }
    i *= 10
  }
  return cnt
}

export default NumberOf1Between1AndNSolution
