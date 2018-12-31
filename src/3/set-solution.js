/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let hashtable = { length: 0 }
  let longest = 0

  for (let index = 0; index < s.length; ++index) {
    let lastPos = hashtable[s[index]]
    if (lastPos !== undefined) {
      let length = index - lastPos
      longest = longest > length ? longest : length
      hashtable = { length }
      for (let j = lastPos + 1; j <= index; ++j) {
        hashtable[s[j]] = j
      }
    } else {
      let length = hashtable.length + 1
      longest = longest > length ? longest : length
      hashtable[s[index]] = index
      hashtable.length = length
    }
  }

  return longest
}

export default lengthOfLongestSubstring
