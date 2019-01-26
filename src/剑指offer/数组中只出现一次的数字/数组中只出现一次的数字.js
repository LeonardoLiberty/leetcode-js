function FindNumsAppearOnce (array) {
  if (array.length <= 2) return array

  let xor = array[0]
  for (let i = 1; i < array.length; ++i) {
    xor ^= array[i]
  }

  // calculate where the first '1' occur in binary representation
  let cnt = 0
  while (xor % 2 === 0) {
    xor >>= 1
    cnt++
  }

  let array1 = []
  let array2 = []
  for (let each of array) {
    if ((each >> cnt) % 2 === 0) array1.push(each)
    else array2.push(each)
  }
  let xor1 = array1[0]
  let xor2 = array2[0]

  for (let i = 1; i < array1.length; ++i) {
    xor1 ^= array1[i]
  }
  for (let i = 1; i < array2.length; ++i) {
    xor2 ^= array2[i]
  }

  return [xor1, xor2]
}
export default FindNumsAppearOnce
