/* eslint-env jest */
import solution from './valid-parentheses.js'

test('', () => {
  expect(solution('')).toEqual(true)
})

test('()', () => {
  expect(solution('()')).toEqual(true)
})

test('([])', () => {
  expect(solution('([])')).toEqual(true)
})

test('()[]{}', () => {
  expect(solution('()[]{}')).toEqual(true)
})

test('([]{}', () => {
  expect(solution('([]{}')).toEqual(false)
})

test('([)]', () => {
  expect(solution('([)]')).toEqual(false)
})

test('((([[[', () => {
  expect(solution('((([[[')).toEqual(false)
})
