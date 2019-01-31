function SumSolution (n) {
  return Number(n > 0 && (n + SumSolution(n - 1)))
}

export default SumSolution
