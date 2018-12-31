/* eslint-env jest */
import solution from './median-of-two-sorted-arrays.js'

test('[1, 3] [2] 2', () => {
  expect(solution([1, 3], [2])).toEqual(2)
})

test('[1, 3] [] 2', () => {
  expect(solution([1, 3], [])).toEqual(2)
})

test('[1, 2, 3] [] 2', () => {
  expect(solution([1, 2, 3], [])).toEqual(2)
})

test('[] [1, 2, 3, 4] 2.5', () => {
  expect(solution([], [1, 2, 3, 4])).toEqual(2.5)
})

test('[] [2, 3, 4] 3', () => {
  expect(solution([], [2, 3, 4])).toEqual(3)
})

test('[1 2 3 4] [2, 3, 4] 3', () => {
  expect(solution([1, 2, 3, 4], [2, 3, 4])).toEqual(3)
})

test('[1 2 3 ] [2, 3, 4] 2.5', () => {
  expect(solution([1, 2, 3], [2, 3, 4])).toEqual(2.5)
})
