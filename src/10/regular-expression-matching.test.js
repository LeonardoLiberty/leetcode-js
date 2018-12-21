const solution = require('./regular-expression-matching.js')

test('"aa", "a"', () => {
  expect(solution('aa', 'a')).toEqual(false)
})

test('"aa", "a*"', () => {
  expect(solution('aa', 'a*')).toEqual(true)
})

test('"aa", "**"', () => {
  expect(solution('aa', '**')).toEqual(false)
})

test('"aa", ".."', () => {
  expect(solution('aa', '..')).toEqual(true)
})

test('"aaaaaaab", "a*b"', () => {
  expect(solution('aaaaaaaab', 'a*b')).toEqual(true)
})

test('"adsbadadfab", ".*b"', () => {
  expect(solution('adsfadsfbadsfb', '.*b')).toEqual(true)
})

test('"", ".*"', () => {
  expect(solution('', '.*')).toEqual(true)
})

test('"", ".*.*"', () => {
  expect(solution('', '.*')).toEqual(true)
})

// after oj

test('"aab", "c*a*b"', () => {
  expect(solution('aab', 'c*a*b*')).toEqual(true)
})

// after oj
test('"mississippi", "mis*is*p*."', () => {
  expect(solution('mississippi', 'mis*is*p*.')).toEqual(false)
})

// after oj
test('"", ""', () => {
  expect(solution('', '')).toEqual(true)
})
