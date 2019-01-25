/* eslint-env jest */
import Heap from './index'

let heap = new Heap()

heap.add(3)
heap.add(6)
heap.add(8)
heap.add(2)
heap.add(5)

test('peak', () => {
  expect(heap.peek()).toEqual(2)
})

test('poll', () => {
  expect(heap.poll()).toEqual(2)
})

test('peak', () => {
  expect(heap.peek()).toEqual(3)
})

test('poll', () => {
  expect(heap.poll()).toEqual(3)
})

test('peak', () => {
  expect(heap.peek()).toEqual(5)
})

test('peak', () => {
  expect(heap.peek()).toEqual(5)
})

test('poll', () => {
  expect(heap.poll()).toEqual(5)
})

test('poll', () => {
  expect(heap.poll()).toEqual(6)
})

test('poll', () => {
  expect(heap.poll()).toEqual(8)
})

test('poll', () => {
  expect(heap.poll()).toEqual(null)
})

test('poll', () => {
  expect(heap.poll()).toEqual(null)
})

test('peek', () => {
  expect(heap.peek()).toEqual(null)
})

// --- another way ----------

let heap2 = new Heap([3, 6, 8, 2, 5])

test('peak', () => {
  expect(heap2.peek()).toEqual(2)
})

test('poll', () => {
  expect(heap2.poll()).toEqual(2)
})

test('peak', () => {
  expect(heap2.peek()).toEqual(3)
})

test('poll', () => {
  expect(heap2.poll()).toEqual(3)
})

test('peak', () => {
  expect(heap2.peek()).toEqual(5)
})

test('peak', () => {
  expect(heap2.peek()).toEqual(5)
})

test('poll', () => {
  expect(heap2.poll()).toEqual(5)
})

test('poll', () => {
  expect(heap2.poll()).toEqual(6)
})

test('poll', () => {
  expect(heap2.poll()).toEqual(8)
})

test('poll', () => {
  expect(heap2.poll()).toEqual(null)
})

test('poll', () => {
  expect(heap2.poll()).toEqual(null)
})

test('peek', () => {
  expect(heap2.peek()).toEqual(null)
})

// --- another way ----------

let heap3 = new Heap([3, 6, 8, 2, 5], (a, b) => b - a)

test('peak', () => {
  expect(heap3.peek()).toEqual(8)
})

test('poll', () => {
  expect(heap3.poll()).toEqual(8)
})

test('peak', () => {
  expect(heap3.peek()).toEqual(6)
})

test('poll', () => {
  expect(heap3.poll()).toEqual(6)
})

test('peak', () => {
  expect(heap3.peek()).toEqual(5)
})

test('peak', () => {
  expect(heap3.peek()).toEqual(5)
})

test('poll', () => {
  expect(heap3.poll()).toEqual(5)
})

test('poll', () => {
  expect(heap3.poll()).toEqual(3)
})

test('poll', () => {
  expect(heap3.poll()).toEqual(2)
})

test('poll', () => {
  expect(heap3.poll()).toEqual(null)
})

test('poll', () => {
  expect(heap3.poll()).toEqual(null)
})

test('peek', () => {
  expect(heap3.peek()).toEqual(null)
})
