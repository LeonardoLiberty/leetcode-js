function GetNumberOfK (data, k) {
  let lowerIndex = 0
  let upperIndex = data.length - 1
  while (lowerIndex <= upperIndex) {
    let mid = Math.floor((lowerIndex + upperIndex) / 2)
    if (data[mid] === k) {
      let left = mid
      while (left >= 0 && data[left] === k) {
        left--
      }
      let right = mid
      while (right < data.length && data[right] === k) {
        right++
      }
      return right - left - 1
    } else if (data[mid] > k) {
      upperIndex = mid - 1
    } else {
      lowerIndex = mid + 1
    }
  }
  return 0
}

export default GetNumberOfK
