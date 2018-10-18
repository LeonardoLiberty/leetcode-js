const solution = require('./problems.js')

test('babad', () => {
  expect(solution('babad')).toEqual('bab')
})

test('', () => {
  expect(solution('')).toEqual('')
})

test('asdccccccb', () => {
  expect(solution('asdccccccb')).toEqual('cccccc')
})

test('cbbd', () => {
  expect(solution('cbbd')).toEqual('bb')
})

test('abcd', () => {
  expect(solution('abcd')).toEqual('a')
})

test('d', () => {
  expect(solution('d')).toEqual('d')
})

test('abcddcba', () => {
  expect(solution('abcddcba')).toEqual('abcddcba')
})

test('bababd', () => {
  expect(solution('bababd')).toEqual('babab')
})
