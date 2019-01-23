function MoreThanHalfNumSolution (numbers) {
  if (!numbers) return 0
  let record = {}
  for (let each of numbers) {
    if (record[each]) {
      record[each]++
    } else {
      record[each] = 1
    }
    if (record[each] > numbers.length / 2) return each
  }
  return 0
}

export default MoreThanHalfNumSolution
