function Add (num1, num2) {
  // 二进制加法模拟
  let carry = (num1 & num2) << 1
  let plusWithoutCarry = num1 ^ num2
  while (carry !== 0) {
    num1 = carry
    num2 = plusWithoutCarry
    carry = (num1 & num2) << 1
    plusWithoutCarry = num1 ^ num2
  }
  return plusWithoutCarry
}

export default Add
