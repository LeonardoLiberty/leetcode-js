/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (p[0] === '*' || p.indexOf('**') !== -1) return false
  if (p.length === 0) return s.length === 0
  if (s.length === 0) return p[1] === '*' && isMatch(s, p.substr(2))

  let firstMatch = s[0] === p[0] || p[0] === '.'
  if (p[1] === '*') {
    return isMatch(s, p.substr(2)) ||
      (firstMatch && isMatch(s.substr(1), p))
  }
  return firstMatch && isMatch(s.substr(1), p.substr(1))
}

export default isMatch
