/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let start = makeNFA(p)
  // console.log(start)
  return match(s, 0, start)
}

function makeNFA (p) {
  function Node (char) {
    this.char = char
    this.next = null
    this.loop = false
  }
  // construct an automata
  let start = new Node(false)
  let cur = start
  for (let i = 0; i < p.length; ++i) {
    if (p[i] === '*') {
      if (cur.loop || !cur.char) return false
      cur.loop = true
    } else {
      if (cur.char) {
        cur.next = new Node(p[i])
        cur = cur.next
      } else {
        cur.char = p[i]
      }
    }
  }
  cur.next = -1
  return start
}

function match (source, index, node) {
  if (source.length === index) {
    if (node === -1 || !node.char) {
      return true
    } else if (node.loop) {
      return match(source, index, node.next)
    }
    return false
  }

  if (node.char === source[index] || node.char === '.') {
    if (node.loop) {
      return match(source, index + 1, node) ||
        match(source, index + 1, node.next) ||
        match(source, index, node.next)
    }
    return match(source, index + 1, node.next)
  }

  if (node.loop) {
    return match(source, index, node.next)
  }

  return false
}

module.exports = isMatch
