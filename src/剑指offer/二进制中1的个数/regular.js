function NumberOf1 (n) {
  /*
    怎样快速把十进制转换为二进制？ - 麦萌的回答 - 知乎
    https://www.zhihu.com/question/33572547/answer/56895036
  */
  function toBinary (n) {
    let re = []
    while (n) {
      if (n % 2 === 1) {
        re.push(1)
        n = (n - 1) / 2
      } else {
        re.push(0)
        n /= 2
      }
    }
    return re
  }

  function toComplement (list) {
    list = list.map(digit => digit === 0 ? 1 : 0)
    while (list.length !== 32) {
      list.push(1)
    }
    // TODO overflow
    let carry = true
    for (let i = 0; i < 32; ++i) {
      if (carry && list[i]) {
        list[i] = 0
      } else if (carry) {
        list[i] = 1
        break
      }
    }
    return list
  }

  if (n >= 0) {
    return toBinary(n).filter(digit => digit === 1).length
  } else {
    return toComplement(toBinary(-n)).filter(digit => digit === 1).length
  }
}

export default NumberOf1
