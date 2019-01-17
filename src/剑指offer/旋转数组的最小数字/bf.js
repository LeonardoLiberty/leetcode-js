function minNumberInRotateArray (rotateArray) {
  let prev = 0
  for (let i = 0; i < rotateArray.length; ++i) {
    if (!prev) prev = rotateArray[i]
    else if (prev > rotateArray[i]) return rotateArray[i]
  }
  return prev
}
export default minNumberInRotateArray
