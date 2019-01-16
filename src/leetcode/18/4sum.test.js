/* eslint-env jest */
import solution from './4sum.js'

test('[1, 0, -1, 0, -2, 2] 0', () => {
  expect(solution([1, 0, -1, 0, -2, 2], 0).sort()).toEqual([
    [-1, 0, 0, 1],
    [-2, -1, 1, 2],
    [-2, 0, 0, 2]
  ].sort())
})
