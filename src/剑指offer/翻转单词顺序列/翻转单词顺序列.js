function ReverseSentence (str) {
  if (!str) return ''
  return str.split(' ').reverse().join(' ')
}

export default ReverseSentence
