// http://www.cnblogs.com/cyjb/p/digitOccurrenceInRegion.html
function NumberOf1Between1AndNSolution (n) {
  if (n <= 0) return 0
  let sum = 0

  let i = 1
  while (true) {
    let temp = Math.floor(n / i)
    if (temp === 0) break
    sum += Math.floor(temp / 10) * i
    if (temp % 10 > 1) {
      sum += i
    } else if (temp % 10 === 1) {
      sum += n - temp * i + 1
    }

    i *= 10
  }

  return sum
}

export default NumberOf1Between1AndNSolution
