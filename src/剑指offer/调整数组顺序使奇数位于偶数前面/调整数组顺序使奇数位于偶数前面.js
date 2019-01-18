function reOrderArray (array) {
  function insertNextOdd () {
    for (j = j || i + 1; j < array.length; ++j) {
      if (array[j] % 2 !== 0) {
        let odd = array[j]
        array.splice(j, 1)
        array.splice(i, 0, odd)
        break
      }
    }
    i++
  }
  let i = 0
  let j = 0
  // find the first even
  while (i < array.length && array[i] % 2 !== 0) i++
  while (i < array.length && j < array.length) insertNextOdd()
  return array
}

export default reOrderArray
