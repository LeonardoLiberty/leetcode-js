function NumberOf1Between1AndNSolution (n) {
  function helper (n) {
    if (n < 10) {
      record[n] = n === 1 ? 1 : 0
    } else {
      record[n] = record[Math.floor(n / 10)] + record[n % 10]
    }
    return record[n]
  }

  let sum = 0
  const record = [0]
  for (let i = 1; i <= n; ++i) {
    sum += helper(i)
  }
  return sum
}

export default NumberOf1Between1AndNSolution
