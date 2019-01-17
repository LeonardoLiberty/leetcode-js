function Fibonacci (n) {
  let lookup = [0, 1]
  let i = 0

  while (true) {
    if (lookup[i] === undefined) lookup[i] = lookup[i - 1] + lookup[i - 2]
    if (i === n) return lookup[i]
    i++
  }
}

export default Fibonacci
