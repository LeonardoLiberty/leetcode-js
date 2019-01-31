function multiply (array) {
  if (!array) return []
  const re = []
  for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length; ++j) {
      if (i === j) continue
      if (re[j] === undefined) {
        re[j] = array[i]
      } else {
        re[j] *= array[i]
      }
    }
  }
  return re
}

export default multiply
