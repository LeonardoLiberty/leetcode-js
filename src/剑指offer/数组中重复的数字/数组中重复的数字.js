function duplicate (numbers, duplication) {
  // write code here
  // 这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
  // 函数返回True/False
  // numbers range 0 to n-1
  if (!numbers) return false
  const len = numbers.length
  for (let num of numbers) {
    num = (num + len) % len
    if (numbers[num] < 0) {
      duplication[0] = num
      return true
    }
    numbers[num] -= len
  }
  return false
}

export default duplicate
