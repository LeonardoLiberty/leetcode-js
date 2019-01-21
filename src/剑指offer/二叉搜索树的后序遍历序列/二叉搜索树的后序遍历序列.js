function VerifySquenceOfBST (sequence) {
  let len = sequence.length
  // 天坑, 输入[] 应该返回false
  if (len === 0) return false
  if (len === 1) return true
  let root = sequence[len - 1]

  // all the value in the left tree
  let i = 0
  while (i < len - 1 && sequence[i] < root) i++

  // all the value in the right tree
  let j = i
  while (j < len - 1 && sequence[j] > root) j++

  if (j !== len - 1) return false
  let leftTreeOk = i <= 0 ? true : VerifySquenceOfBST(sequence.slice(0, i))
  let rightTreeOk = i >= len - 1 ? true : VerifySquenceOfBST(sequence.slice(i, len - 1))
  return leftTreeOk && rightTreeOk
}

export default VerifySquenceOfBST
