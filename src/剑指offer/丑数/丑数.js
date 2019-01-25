function GetUglyNumberSolution (index) {
  // 天坑边界
  if (index <= 0) return 0
  if (index === 1) return 1
  let stack = [1]
  let ptr2 = 0
  let ptr3 = 0
  let ptr5 = 0
  for (let i = 2; i <= index; ++i) {
    const minValue = Math.min(stack[ptr2] * 2, stack[ptr3] * 3, stack[ptr5] * 5)
    if (minValue === stack[ptr2] * 2) ptr2++
    if (minValue === stack[ptr3] * 3) ptr3++
    if (minValue === stack[ptr5] * 5) ptr5++

    stack.push(minValue)
  }
  return stack.pop()
}

export default GetUglyNumberSolution
