function jumpFloor (number) {
  // at most number step

  let lookUp = [1, 1]

  for (let step = 0; step <= number; ++step) {
    if (lookUp[step] === undefined) lookUp[step] = lookUp[step - 1] + lookUp[step - 2]
    if (step === number) return lookUp[step]
  }
}

export default jumpFloor
