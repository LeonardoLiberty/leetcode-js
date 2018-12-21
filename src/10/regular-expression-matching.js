/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch_automata = function (s, p) {
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

//  ------------ better nfa -----------------------------

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
// Nfa Idea
// 1. Loop s to do state/position transition exactly like in NFA.
// 2. States here means valid positions in p that can be used to compare
//    with s. e.g. for p = "a*b*c*def" and before first comparision, we
//    know that position 0, 2, 4, 6 is the valid position
// 3. after comparision, update each state/position to have new position,
//    ignore those dead positions.
// 4. After loop, check if there is any state/position is in finish state

  if (p.indexOf('**') !== -1 || p[0] === '*') {
    // invalid pattern string
    return false
  }

  // init states
  let states = new Set()
  calculateValidStates(states, 0, p)

  for (let char of s) {
    // update all the states
    // state transition
    let newStates = new Set()
    for (let state of states) {

      // only non-dead state should be updated
      if (p[state] === char || p[state] === '.') {
        calculateValidStates(newStates, state + 1, p)
      }
    }
    states = newStates
  }

  // check any state in finish state
  return states.has(p.length)
}

function calculateValidStates (states, pos, p) {
  if (p[pos] === '*') {
    // case a*bcd after we check s has 'a'
    // hence we either back to 'a' or jump to 'b'
    states.add(pos - 1)
    calculateValidStates(states, pos + 1, p)
  } else {
    states.add(pos)
    if (p[pos + 1] === '*') {
      // case a*b*c* =>  {0, 2, 4}
      // thanks to js, no need to bound check
      calculateValidStates(states, pos + 2, p)
    }
  }
}

module.exports = isMatch
