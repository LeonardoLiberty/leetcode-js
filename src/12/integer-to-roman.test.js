/* eslint-env jest */
import solution from './integer-to-roman.js'

test('3', () => {
  expect(solution(3)).toEqual('III')
})

test('4', () => {
  expect(solution(4)).toEqual('IV')
})

test('3572', () => {
  expect(solution(3572)).toEqual('MMMDLXXII')
})

test('3999', () => {
  expect(solution(3999)).toEqual('MMMCMXCIX')
})
