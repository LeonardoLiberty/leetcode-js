/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const hash = {}
  for (const each of t) {
    if (hash[each] === undefined) {
      hash[each] = -1
    } else {
      hash[each]--
    }
  }
  const needToContain = Object.keys(hash).length
  let curContain = 0
  let reLeft = 0
  let reRight = 0
  let left = 0
  let right = 0
  while (left < s.length) {
    if (right < s.length && curContain !== needToContain) {
      // move right
      if (hash[s[right]] !== undefined) {
        hash[s[right]]++
        if (hash[s[right]] === 0) curContain++
      }
      right++
    } else if (curContain === needToContain) {
      // move left
      if (hash[s[left]] !== undefined) {
        if (hash[s[left]] === 0) curContain--
        hash[s[left]]--
      }
      left++
    } else {
      // 右指针到了尽头, 且当前并不包含t中所有字母
      break
    }

    if (curContain === needToContain &&
       ((!reLeft && !reRight) || right - left < reRight - reLeft)) {
      reLeft = left
      reRight = right
    }
  }
  return s.slice(reLeft, reRight)
}

export default minWindow
