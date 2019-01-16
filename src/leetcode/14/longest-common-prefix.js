/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]

  let i = 0
  while (true) {
    let char = strs[0][i]
    for (let str of strs) {
      if (!char || char !== str[i]) {
        return strs[0].substr(0, i)
      }
    }
    i++
  }
}

export default longestCommonPrefix
