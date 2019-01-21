function IsPopOrder (pushV, popV) {
  let len = popV.length
  let stack = []
  let i = 0
  let j = 0
  while (true) {
    if (j === len) return true

    while (i < len && stack[stack.length - 1] !== popV[j]) stack.push(pushV[i++])
    if (stack.pop() !== popV[j++]) return false
  }
}

export default IsPopOrder
