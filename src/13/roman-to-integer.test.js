/* eslint-env jest */
import solution from './roman-to-integer.js'

test('3', () => {
  expect(solution('III')).toEqual(3)
})

test('4', () => {
  expect(solution('IV')).toEqual(4)
})

test('3572', () => {
  expect(solution('MMMDLXXII')).toEqual(3572)
})

test('3999', () => {
  expect(solution('MMMCMXCIX')).toEqual(3999)
})
