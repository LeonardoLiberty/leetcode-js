/* eslint-env jest */
import solution from './3sum-closest.js'

test('[-1, 2, 1, -4] 1', () => {
  expect(solution([-1, 2, 1, -4], 1)).toEqual(2)
})
