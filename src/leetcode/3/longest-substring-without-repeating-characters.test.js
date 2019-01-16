/* eslint-env jest */
import solution from './longest-substring-without-repeating-characters'

let string = 'abcabcbb'
test(string, () => {
  expect(solution(string)).toEqual(3)
})

let string2 = 'bbbbb'
test(string2, () => {
  expect(solution(string2)).toEqual(1)
})

let string3 = 'pwwkew'
test(string3, () => {
  expect(solution(string3)).toEqual(3)
})

let string4 = ''
test(string4, () => {
  expect(solution(string4)).toEqual(0)
})

let string5 = 'a'
test(string5, () => {
  expect(solution(string5)).toEqual(1)
})
