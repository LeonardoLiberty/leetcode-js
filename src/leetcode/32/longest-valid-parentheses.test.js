/* eslint-env jest */
import solution from './longest-valid-parentheses.js'

test('""', () => {
  expect(solution('')).toEqual(0)
})

test('"()"', () => {
  expect(solution('()')).toEqual(2)
})

test('(()', () => {
  expect(solution('(()')).toEqual(2)
})

test('"(((())"', () => {
  expect(solution('(((())')).toEqual(4)
})

test(')()())', () => {
  expect(solution(')()())')).toEqual(4)
})

test('()(()', () => {
  expect(solution('()(()')).toEqual(2)
})

test('"(()())"', () => {
  expect(solution('"(()())"')).toEqual(6)
})
