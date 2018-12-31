/* eslint-env jest */
import solution from './zigzag-conversion.js'

test('PAYPALISHIRING', () => {
  expect(solution('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR')
})

test('PAYPALISHIRING', () => {
  expect(solution('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI')
})

test('PAYPALISHIRING', () => {
  expect(solution('PAYPALISHIRING', 2)).toEqual('PYAIHRNAPLSIIG')
})

test('PAYPALISHIRING', () => {
  expect(solution('PAYPALISHIRING', 1)).toEqual('PAYPALISHIRING')
})

test('PAYPALISHIRING', () => {
  expect(solution('PAYPALISHIRING', 20)).toEqual('PAYPALISHIRING')
})

test('', () => {
  expect(solution('', 2)).toEqual('')
})

test('abcde', () => {
  expect(solution('abcde', 4)).toEqual('abced')
})
