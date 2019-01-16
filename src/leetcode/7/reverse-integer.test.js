/* eslint-env jest */
import solution from './reverse-integer.js'

test('123', () => {
  expect(solution(123)).toEqual(321)
})

test('2147483643', () => {
  expect(solution(2147483643)).toEqual(0)
})

test('0', () => {
  expect(solution(0)).toEqual(0)
})

test('-400', () => {
  expect(solution(-400)).toEqual(-4)
})

test('-2147483648', () => {
  expect(solution(-2147483648)).toEqual(0)
})

test('-2147483648', () => {
  expect(solution(-2147483648)).toEqual(0)
})
