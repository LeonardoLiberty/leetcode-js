/* eslint-env jest */
import solution from './3sum.js'

test('[-1, 0, 1, 2, -1, -4]', () => {
  expect(solution([-1, 0, 1, 2, -1, -4]).sort()).toEqual([[-1, 0, 1], [-1, -1, 2]].sort())
})

test('[-1,0,1,1,-1,-4, 4]', () => {
  expect(solution([-1, 0, 1, 1, -1, -4, 4]).sort()).toEqual([[-1, 0, 1], [-4, 0, 4]].sort())
})
