var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0

  let table = [0]
  let i = 0
  let j = 1

  // 计算回看表 也用到了KMP的优化思想
  // 即如果needle中某个开头和结尾相匹配
  // 一旦失败可以直接跳过相匹配部分
  // 从相匹配部分的下一个开始比较
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
