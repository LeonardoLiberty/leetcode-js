const solution = require('./two-sum.js')

test('[2, 7, 11, 15] 9', () => {
  expect(solution([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test('[2, 11, 15, 7] 9', () => {
  expect(solution([2, 11, 15, 7], 9)).toEqual([0, 3])
})

test('[2, 7, 11, 15] 18', () => {
  expect(solution([2, 7, 11, 15], 18)).toEqual([1, 2])
})

test('[2, 11, 11, 15] 22', () => {
  expect(solution([2, 11, 11, 15], 22)).toEqual([1, 2])
})

test('[3, 2, 4] 6', () => {
  expect(solution([3, 2, 4], 6)).toEqual([1, 2])
})
