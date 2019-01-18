let stack = []
let stackMin = []

function push (node) {
  stack.push(node)
  if (stackMin.length === 0 || stackMin[stackMin.length - 1] >= node) {
    stackMin.push(node)
  }
}

function pop () {
  let node = stack.pop()
  if (stackMin[stackMin.length - 1] === node) {
    stackMin.pop()
  }
  return node
}

function top () {
  return stack[stack.length - 1]
}

function min () {
  return stackMin[stackMin.length - 1]
}

export default { push, pop, top, min }
