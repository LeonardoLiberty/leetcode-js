function FindContinuousSequence (sum) {
  const re = []
  for (let i = 2; i <= sum; ++i) {
    if (i % 2 === 1 && Number.isInteger(sum / i)) {
      let j = -(i - 1) / 2
      if (sum / i + j <= 0) break
      // avg of odd number of digits must be integer
      const temp = []
      for (; j <= (i - 1) / 2; ++j) temp.push(sum / i + j)
      re.push(temp)
    } else if (i % 2 === 0 && !Number.isInteger(sum / i) && Number.isInteger(2 * sum / i)) {
      // avg of even number of digits must be xx.5
      let j = -i / 2
      if (sum / i + j <= 0) break
      const temp = []
      for (; j < i / 2; ++j) temp.push(Math.ceil(sum / i + j))
      re.push(temp)
    }
  }
  return re.reverse()
}

export default FindContinuousSequence
