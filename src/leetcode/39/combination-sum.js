/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  function helper (candidates, target, n) {
    let re = []
    // 适当剪枝
    if (candidates.length < 1 || candidates[0] * n > target) return re
    if (n === 1) {
      let left = 0
      let right = candidates.length - 1
      while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (candidates[mid] === target) {
          re.push([target])
          break
        } else if (candidates[mid] > target) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
    } else {
      re = re.concat(
        helper(candidates, target - candidates[0], n - 1).map(each => {
          each.unshift(candidates[0])
          return each
        }
        )
      )
      re = re.concat(helper(candidates.slice(1), target, n))
    }
    return re
  }

  let re = []
  candidates.sort((a, b) => a - b)
  let n = 1
  while (n <= target / candidates[0]) {
    re = re.concat(helper(candidates, target, n))
    n++
  }
  return re
}

export default combinationSum
