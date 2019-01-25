function PrintMinNumber (numbers) {
  numbers.sort((num1, num2) => {
    const str1 = String(num1)
    const str2 = String(num2)
    const sum1 = str1 + str2
    const sum2 = str2 + str1
    return sum1 - sum2
  })
  return numbers.join('')
}

export default PrintMinNumber
