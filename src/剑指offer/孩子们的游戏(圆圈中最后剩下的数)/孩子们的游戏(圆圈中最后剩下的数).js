function LastRemainingSolution (n, m) {
  if (n < 1 || m < 1) return -1
  let re = 0
  for (let i = 2; i <= n; ++i) {
    re = (re + m) % i
  }
  return re
}

export default LastRemainingSolution
