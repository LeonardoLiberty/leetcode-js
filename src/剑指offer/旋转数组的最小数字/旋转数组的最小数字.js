function minNumberInRotateArray (rotateArray) {
  const len = rotateArray.length
  if (len === 0) return 0
  else if (len === 1) return rotateArray[0]

  const mid = Math.floor(len / 2)
  if (rotateArray[mid - 1] > rotateArray[mid]) return rotateArray[mid]
  return Math.min(
    minNumberInRotateArray(rotateArray.slice(0, mid)),
    minNumberInRotateArray(rotateArray.slice(mid, len))
  )
}

export default minNumberInRotateArray
