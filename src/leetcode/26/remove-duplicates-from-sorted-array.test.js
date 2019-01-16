/* eslint-env jest */
import solution from './remove-duplicates-from-sorted-array.js'

test('[]', () => {
  expect(solution([])).toEqual(0)
})

test('[1,2,3]', () => {
  expect(solution([1, 2, 3])).toEqual(3)
})

test('[1,1,1, 2,3]', () => {
  expect(solution([1, 1, 1, 2, 3])).toEqual(3)
})

test('[1,1,1, 1,1]', () => {
  expect(solution([1, 1, 1, 1, 1])).toEqual(1)
})

test('[1, 1, 2, 2, 3, 4, 5, 5, 7]', () => {
  expect(solution([1, 1, 2, 2, 3, 4, 5, 5, 7])).toEqual(6)
})
