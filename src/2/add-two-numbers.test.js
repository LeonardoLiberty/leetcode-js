const { list2num, num2list, addTwoNumbers } =
  require('./add-two-numbers.js')

console.log(num2list(243))
console.log(num2list(0))
console.log(num2list(1000))
console.log(num2list(99))
console.log(list2num(num2list(1000)))
console.log(list2num(num2list(0)))

test('243 564 807', () => {
  expect(addTwoNumbers(num2list(243), num2list(564))).toEqual([7, 0, 8])
})

test('999 1 1000', () => {
  expect(addTwoNumbers(num2list(999), num2list(1))).toEqual([0, 0, 0, 1])
})

// without consider extremely long num
