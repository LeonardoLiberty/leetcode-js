/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  for (let each of s) {
    if (each === '(' || each === '{' || each === '[') stack.push(each)
    else if (each === ')' && stack.pop() !== '(') return false
    else if (each === ']' && stack.pop() !== '[') return false
    else if (each === '}' && stack.pop() !== '{') return false
  }
  return stack.length === 0
}

export default isValid
