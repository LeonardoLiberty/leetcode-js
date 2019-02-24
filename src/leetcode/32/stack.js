/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // save the left position of valid string
  // used to continuously calculate the length
  const stack = [-1]
  let maxLength = 0

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length === 0) {
        // pop out the first one, which means substr including i is invalid
        // reset the left position of valid string
        stack.push(i)
      } else {
        maxLength = maxLength > i - stack[stack.length - 1]
          ? maxLength
          : i - stack[stack.length - 1]
      }
    }
  }
  return maxLength
}

export default longestValidParentheses
