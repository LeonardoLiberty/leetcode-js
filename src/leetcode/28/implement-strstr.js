var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0

  let table = [0]
  let i = 0
  let j = 1
  while (j < needle.length) {
    if (needle[i] === needle[j]) {
      table.push(++i)
      j++
    } else if (i !== 0) {
      i = table[i - 1]
    } else {
      table.push(0)
      j++
    }
  }

  i = 0
  j = 0
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      i++
      j++
      if (j === needle.length) return i - needle.length
    } else if (j !== 0) {
      j = table[j - 1]
    } else {
      i++
    }
  }
  return -1
}
export default strStr
