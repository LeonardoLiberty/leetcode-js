const solution = require('./two-sum.js')

test('[2, 7, 11, 15]', () => {
  expect(solution([2, 7, 11, 15], 9)).toEqual([0, 1])
})
