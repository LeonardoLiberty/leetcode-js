/* eslint-env jest */
import solution, { num2list } from './add-two-numbers.js'

test('243 564 807', () => {
  expect(solution(num2list(243), num2list(564))).toEqual([7, 0, 8])
})

test('999 1 1000', () => {
  expect(solution(num2list(999), num2list(1))).toEqual([0, 0, 0, 1])
})

// without consider extremely long num
