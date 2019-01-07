/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let re = []

  const table = {}
  for (let i = 2, code = 97; i < 10; i++) {
    table[i] = []
    table[i].push(String.fromCharCode(code++))
    table[i].push(String.fromCharCode(code++))
    table[i].push(String.fromCharCode(code++))
    if (i === 7 || i === 9) {
      table[i].push(String.fromCharCode(code++))
    }
  }

  for (let digit of digits) {
    let newRe = []
    if (re.length === 0) {
      re = table[digit]
      continue
    }
    for (let char of table[digit]) {
      for (let each of re) {
        newRe.push(each + char)
      }
    }
    re = newRe
  }

  return re
}

export default letterCombinations
