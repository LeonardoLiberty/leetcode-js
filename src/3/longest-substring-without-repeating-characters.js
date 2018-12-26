/**
 * @param {string} s
 * @return {number}
 */

// 1. 刚开始的想法是这道提要用动态规划
//   + 维护一个数组来保存包括当前位置的最长的不重复字符串
//   + 从位置0开始, 每到一个新位置如果该位置字母没出现过则维护的数组加一
//   + 如果字母出现过, 则当前维护的数组的起始位置改为上次出现该字母之后
// 2. 这样做的缺陷在于
//   + 当重复字母出现, 需要在当前的不重复字符串中找到重复字母上一次出现的位置
//   + 实际上并没有重复利用哈希表, 每次只是用哈希表来查询字符是在当前字符串中
// 3. 更好的方式在于, 哈希表中存字符出现的位置
//   + 每次当重复字母出现时, 将不重复字符串的头直接移到重复字母上一次位置之后
//   + 这里的移动不需要再不重复字符串中寻找, 只需要查询哈希表即可

var lengthOfLongestSubstring = function (s) {
  let hashtable = {}
  let startPos = 0 // record current non repeat string start pos
  let endPos = 0
  let maxLength = 0
  while (endPos !== s.length) {
    if (hashtable[s[endPos]] >= startPos) {
      let length = endPos - startPos
      maxLength = length > maxLength ? length : maxLength
      startPos = hashtable[s[endPos]] + 1
    }
    hashtable[s[endPos]] = endPos
    endPos++
  }
  let length = endPos - startPos
  maxLength = length > maxLength ? length : maxLength
  return maxLength
}

export default lengthOfLongestSubstring
