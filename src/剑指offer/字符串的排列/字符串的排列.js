function Permutation (str) {
  function helper (gap) {
    if (len === gap.len) return []
    if (len === gap.len + 1) {
      for (let i = 0; i < len; ++i) {
        if (!gap[i]) return [list[i]]
      }
    }

    let re = []
    let record = {}
    for (let i = 0; i < len; ++i) {
      // avoid gapped element
      if (gap[i]) continue

      // avoid duplicate
      if (record[list[i]]) continue
      record[list[i]] = true

      gap[i] = true
      gap.len++
      let subPermutation = helper(gap)
      for (let each of subPermutation) {
        re.push(list[i] + each)
      }
      gap[i] = false
      gap.len--
    }
    return re
  }
  if (str.length === 0) return []
  let list = str.split('').sort()
  let len = list.length
  return helper({ len: 0 })
}

export default Permutation
