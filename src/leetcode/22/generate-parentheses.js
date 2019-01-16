/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let helper = function (rightParenNeeded, totalParenNeeded, curStr) {
    if (totalParenNeeded === 0) {
      re.push(curStr)
    } else if (rightParenNeeded === totalParenNeeded) {
      helper(rightParenNeeded - 1, totalParenNeeded - 1, curStr + ')')
    } else {
      if (rightParenNeeded === 0) {
        helper(rightParenNeeded + 1, totalParenNeeded - 1, curStr + '(')
      } else {
        helper(rightParenNeeded - 1, totalParenNeeded - 1, curStr + ')')
        helper(rightParenNeeded + 1, totalParenNeeded - 1, curStr + '(')
      }
    }
  }
  let re = []
  helper(0, n * 2, '')
  return re
}

export default generateParenthesis
