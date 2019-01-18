function rectCover (number) {
  // 天坑， 第一个值是 0 而不是 1
  let lookUp = [0, 1, 2]

  for (let i = 0; i <= number; ++i) {
    if (lookUp[i] === undefined) lookUp[i] = lookUp[i - 1] + lookUp[i - 2]
    if (i === number) return lookUp[i]
  }
}

export default rectCover
