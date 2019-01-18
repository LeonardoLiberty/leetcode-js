let stack = []
let sortList = []

function insert (list, node) {
  for (let i = 0; i < list.length; ++i) {
    if (list[i] > node) {
      list.splice(i, 0, node)
      return
    }
  }
  list.push(node)
}

function remove (list, node) {
  let i = list.indexOf(node)
  list.splice(i, 1)
}

function push (node) {
  stack.push(node)
  insert(sortList, node)
}

function pop () {
  let node = stack.pop()
  remove(sortList, node)
  return node
}

function top () {
  return stack[stack.length - 1]
}

function min () {
  return sortList[0]
}

export default { push, pop, top, min }
