/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  function helper (candidates, target, n) {
    let re = []
    if (candidates.length < n) {
      return re
    }

    let sum = 0
    for (let i = 0; i < n; ++i) {
      sum += candidates[i]
    }
    if (sum > target) {
      return re
    }

    if (n === 1) {
      let left = 0
      let right = candidates.length - 1
      while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (candidates[mid] === target) {
          re.push([target])
          break
        } else if (candidates[mid] < target) {
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
    } else {
      let prev
      for (let i = 0; i < candidates.length; ++i) {
        if (prev === candidates[i]) continue
        prev = candidates[i]
        re = re.concat(helper(candidates.slice(i + 1), target - candidates[i], n - 1)
          .map(each => {
            each.unshift(candidates[i])
            return each
          })
        )
      }
    }
    return re
  }

  let re = []
  candidates.sort((a, b) => a - b)
  let n = 1
  while (n <= Math.floor(target / candidates[0])) {
    re = re.concat(helper(candidates, target, n))
    n++
  }
  return re
}

export default combinationSum2
