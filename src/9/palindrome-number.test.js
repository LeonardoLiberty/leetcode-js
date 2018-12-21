const solution = require('./palindrome-number.js')

test('-222', () => {
  expect(solution(-222)).toEqual(false)
})

test('0', () => {
  expect(solution(0)).toEqual(true)
})

test('121', () => {
  expect(solution(121)).toEqual(true)
})

test('12321', () => {
  expect(solution(12321)).toEqual(true)
})
