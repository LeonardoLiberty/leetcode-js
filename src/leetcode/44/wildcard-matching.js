/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function (s, p) {
  function helper (i, j) {
    const key = i + ',' + j
    if (table[key] !== undefined) return table[key]

    if (j === p.length) {
      table[key] = i === s.length
    } else if (s[i] && (s[i] === p[j] || p[j] === '?')) {
      table[key] = helper(i + 1, j + 1)
    } else if (p[j] === '*') {
      // ...*** is the same as ...*
      let lastStarIndex = j
      while (p[lastStarIndex + 1] === '*') { lastStarIndex++ }

      let nextValidIndex = i
      while (
        p[lastStarIndex + 1] !== '?' &&
        nextValidIndex < s.length &&
        s[nextValidIndex] !== p[lastStarIndex + 1]) {
        nextValidIndex++
      }

      // p: ...* always true
      // p: ..*a  s: ....(no a)
      if (lastStarIndex + 1 === p.length) {
        table[key] = true
      } else if (nextValidIndex === s.length) {
        table[key] = false
      } else {
        table[key] = helper(nextValidIndex + 1, lastStarIndex + 2) ||
          helper(nextValidIndex + 1, lastStarIndex)
      }
    } else {
      table[key] = false
    }
    return table[key]
  }
  const table = {}
  return helper(0, 0)
}

export default isMatch
