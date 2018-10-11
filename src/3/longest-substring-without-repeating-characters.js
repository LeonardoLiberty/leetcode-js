/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let hashtable = { length: 0 }
//   let longest = 0

//   for (let index = 0; index < s.length; ++index) {
//     let lastPos = hashtable[s[index]]
//     if (lastPos !== undefined) {
//       let length = index - lastPos
//       longest = longest > length ? longest : length
//       hashtable = { length }
//       for (let j = lastPos + 1; j <= index; ++j) {
//         hashtable[s[j]] = j
//       }
//     } else {
//       let length = hashtable.length + 1
//       longest = longest > length ? longest : length
//       hashtable[s[index]] = index
//       hashtable.length = length
//     }
//   }

//   return longest
// }

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

module.exports = lengthOfLongestSubstring
