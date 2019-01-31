function IsContinuous (numbers) {
  if (!numbers || numbers.length !== 5) return false
  let zeroCnt = 0
  let prev = 0
  numbers.sort()
  for (let each of numbers) {
    if (each === 0) {
      zeroCnt++
      continue
    }

    // non zero
    while (prev !== 0 && prev + 1 !== each) {
      prev++
      zeroCnt--
      if (zeroCnt < 0) return false
    }
    prev = each
  }
  return true
}

export default IsContinuous
