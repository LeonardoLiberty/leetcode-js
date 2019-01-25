function FirstNotRepeatingChar (str) {
  let record = new Array(52)
  for (let i = 0; i < str.length; ++i) {
    const code = str.charCodeAt(i)
    let index
    if (code >= 97 && code <= 122) {
      index = code - 97
    } else {
      index = code - 65 + 26
    }
    if (record[index] === undefined) record[index] = { pos: i, cnt: 1 }
    else record[index].cnt++
  }

  let pos = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < record.length; ++i) {
    if (record[i] && record[i].cnt === 1 && record[i].pos < pos) {
      pos = record[i].pos
    }
  }
  return pos === Number.MAX_SAFE_INTEGER ? -1 : pos
}

export default FirstNotRepeatingChar
