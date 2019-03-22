/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (words.length === 0) return []
  const re = []
  const size = words.length
  const wordLen = words[0].length

  for (let i = 0; i < wordLen; ++i) {
    let hash = {}
    for (const word of words) {
      if (hash[word] === undefined) hash[word] = -1
      else hash[word]--
    }
    let left = i
    let right = i
    let count = 0
    while (right < s.length) {
      const curWord = s.substr(right, wordLen)
      right += wordLen
      if (hash[curWord] !== undefined) {
        hash[curWord]++
        count++
        if (hash[curWord] > 0) {
          // 多了
          while (hash[curWord] !== 0) {
            const firstWord = s.substr(left, wordLen)
            hash[firstWord]--
            left += wordLen
            count--
          }
        } else if (count === size) {
          // 可以了
          re.push(left)
          const firstWord = s.substr(left, wordLen)
          hash[firstWord]--
          left += wordLen
          count--
        }
      } else {
        left = right
        count = 0
        hash = {}
        for (const word of words) {
          if (hash[word] === undefined) hash[word] = -1
          else hash[word]--
        }
      }
    }
  }

  return re
}

export default findSubstring
