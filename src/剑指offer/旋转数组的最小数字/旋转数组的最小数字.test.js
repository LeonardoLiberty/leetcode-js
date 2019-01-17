/* eslint-env jest */
import solution from './旋转数组的最小数字.js'

test('[3, 4, 5, 1, 2]', () => {
  expect(solution([3, 4, 5, 1, 2])).toEqual(1)
})

test('[]', () => {
  expect(solution([])).toEqual(0)
})

test('[2 2 2 2]', () => {
  expect(solution([2, 2, 2, 2])).toEqual(2)
})
