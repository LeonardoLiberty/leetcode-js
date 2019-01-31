function multiply (array) {
  if (!array || array.length === 1) return []
  const re = []

  // 1 2 3 x  5 6
  // left part i.e 1 * 2 * 3
  for (let i = 0; i < array.length; ++i) {
    if (i === 0) re.push(1)
    else re.push(re[i - 1] * array[i - 1])
  }

  // right part i.e 5 * 6
  for (let i = array.length - 1, temp = 1; i > -1; --i) {
    if (i !== array.length - 1) re[i] *= temp
    temp *= array[i]
  }
  return re
}

export default multiply
