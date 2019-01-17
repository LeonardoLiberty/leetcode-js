function jumpFloorII (number) {
  let lookUp = [1, 1]
  for (let step = 0; step <= number; ++step) {
    if (lookUp[step] === undefined) lookUp[step] = lookUp.reduce((a, b) => a + b, 0)
    if (number === step) return lookUp[step]
  }
}

export default jumpFloorII
