let stream
let table
// Init module if you need
function Init () {
  stream = []
  table = {}
}
// Insert one char from stringstream
function Insert (ch) {
  if (table[ch]) {
    table[ch]++
  } else {
    table[ch] = 1
    stream.push(ch)
  }
}
// return the first appearence once char in current stringstream
function FirstAppearingOnce () {
  for (let each of stream) {
    if (table[each] === 1) return each
  }
  return '#'
}

export default { Init, Insert, FirstAppearingOnce }
