/* eslint-env jest */
import Sort from './index'

// ----  default inplace  -------

test('[]', () => {
  expect(Sort([])).toEqual([])
})

test('[1]', () => {
  expect(Sort([1])).toEqual([1])
})

test('[1, 2]', () => {
  expect(Sort([1, 2])).toEqual([1, 2])
})

test('[1, 2, 3]', () => {
  expect(Sort([1, 2, 3])).toEqual([1, 2, 3])
})

test('[1, 2, 3, 4]', () => {
  expect(Sort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
})

test('[4, 2, 3 ,1]', () => {
  expect(Sort([4, 2, 3, 1])).toEqual([1, 2, 3, 4])
})

test('[3, 2, 2, 4]', () => {
  expect(Sort([4, 2, 2, 3])).toEqual([2, 2, 3, 4])
})

test('[4, 3, 2, 1]', () => {
  expect(Sort([4, 3, 2, 1])).toEqual([1, 2, 3, 4])
})

test('[1, 2, 3, 4] inv', () => {
  expect(Sort([1, 2, 3, 4], (a, b) => b - a)).toEqual([4, 3, 2, 1])
})
