let inStack = []
let outStack = []

function move (src, dest) {
  while (true) {
    let node = src.pop()
    if (node === undefined) break
    dest.push(node)
  }
}

function push (node) {
  inStack.push(node)
}

function pop () {
  if (outStack.length === 0) move(inStack, outStack)
  return outStack.pop()
}

export default { push, pop }
