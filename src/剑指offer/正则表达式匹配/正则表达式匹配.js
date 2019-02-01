// s, pattern都是字符串
function match (s, pattern) {
  if (s === undefined || s === null || pattern === undefined || pattern === null) return false
  if (pattern.length === 0) return s.length === 0

  const firstMatch = s[0] !== undefined &&
    (s[0] === pattern[0] || pattern[0] === '.')
  if (pattern[1] === '*') {
    return (firstMatch && match(s.substr(1), pattern)) ||
      match(s, pattern.substr(2))
  }
  return firstMatch && match(s.substr(1), pattern.substr(1))
}

export default match
