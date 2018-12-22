const solution = require('./container-with-most-water.js')

test('[1,8,6,2,5,4,8,3,7]', () => {
  expect(solution([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49)
})

test('[2,8,6,2,500,400,8,3,2]', () => {
  expect(solution([2, 8, 6, 2, 500, 400, 8, 3, 2])).toEqual(400)
})

// if while (left !== right) inf loop
test('[100, 100]', () => {
  expect(solution([100, 100])).toEqual(100)
})
