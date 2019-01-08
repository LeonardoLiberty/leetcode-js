/* eslint-env jest */
import solution from './generate-parentheses.js'

test('3', () => {
  expect(solution(3).sort()).toEqual([
    '((()))',
    '(()())',
    '(())()',
    '()(())',
    '()()()'
  ].sort())
})

test('0', () => {
  expect(solution(0).sort()).toEqual([
    ''
  ].sort())
})
