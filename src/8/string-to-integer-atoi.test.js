const solution = require('./string-to-integer-atoi.js')

test('42', () => {
  expect(solution('42')).toEqual(42)
})

test('     -42', () => {
  expect(solution('     -42')).toEqual(-42)
})

test('     -42asdf', () => {
  expect(solution('     -42adsfadf')).toEqual(-42)
})

test('21474836482', () => {
  expect(solution('21474836482')).toEqual(2147483647)
})

test('-221474836482', () => {
  expect(solution('-221474836482')).toEqual(-2147483648)
})

test('', () => {
  expect(solution('')).toEqual(0)
})

test('a111', () => {
  expect(solution('a111')).toEqual(0)
})

test('\n123', () => {
  expect(solution('\n123')).toEqual(0)
})
