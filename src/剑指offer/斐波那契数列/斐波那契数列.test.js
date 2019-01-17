/* eslint-env jest */
import solution from './斐波那契数列.js'

test('0', () => {
  expect(solution(0)).toEqual(0)
})

test('1', () => {
  expect(solution(1)).toEqual(1)
})

test('2', () => {
  expect(solution(2)).toEqual(1)
})

test('3', () => {
  expect(solution(3)).toEqual(2)
})
