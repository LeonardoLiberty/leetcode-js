function IsContinuous (numbers) {
  if (!numbers || numbers.length !== 5) return false
  // 1. max - min < 5
  // 2. no repeat number

  const table = {}
  let min = Number.MAX_VALUE
  let max = Number.MIN_VALUE
  for (let each of numbers) {
    if (each === 0) continue

    if (table[each]) return false
    table[each] = true

    if (each < min) min = each
    if (each > max) max = each
  }
  return max - min < 5
}

export default IsContinuous
