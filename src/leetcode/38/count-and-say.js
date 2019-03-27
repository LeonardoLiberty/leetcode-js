/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let re = '1'

  while (n !== 1) {
    let newRe = ''
    let curDigit
    let count
    for (let i = 0; i < re.length; ++i) {
      if (curDigit === re[i]) {
        count++
      } else {
        if (i !== 0) newRe += `${count}${curDigit}`
        count = 1
        curDigit = re[i]
      }

      if (i === re.length - 1) newRe += `${count}${curDigit}`
    }
    // console.log(re)
    re = newRe
    n--
  }

  return re
}

export default countAndSay
