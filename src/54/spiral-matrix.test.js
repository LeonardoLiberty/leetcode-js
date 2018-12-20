const solution = require('./spiral-matrix.js')

test('[[1,2,3], [4,5,6], [7,8,9]]', () => {
  expect(solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
    .toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
})

test('[]', () => {
  expect(solution([])).toEqual([])
})

test('[[1, 2, 3, 4],[5, 6, 7, 8],[9,10,11,12]]', () => {
  expect(solution([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
    .toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
})
