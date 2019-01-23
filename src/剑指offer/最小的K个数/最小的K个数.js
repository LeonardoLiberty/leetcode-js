function GetLeastNumbersSolution (input, k) {
  let len = input.length
  if (k > len || k < 0) return []
  input.sort((a, b) => a - b)
  return input.slice(0, k)
  // 返回的N个数需要是sorted
}

export default GetLeastNumbersSolution
