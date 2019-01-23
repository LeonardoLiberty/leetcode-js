function MoreThanHalfNumSolution (numbers) {
  // 用时间换空间
  // 两次循环

  // 采用阵地攻守的思想：
  // 第一个数字作为第一个士兵，守阵地；count = 1；
  // 遇到相同元素，count++;
  // 遇到不相同元素，即为敌人，同归于尽,count--；
  // 当遇到count为0的情况，又以新的i值作为守阵地的士兵，继续下去
  // 到最后还留在阵地上的士兵，有可能是主元素。
  // 再加一次循环，记录这个士兵的个数看是否大于数组一般即可。
  if (!numbers) return 0
  let len = numbers.length
  let counter = 1
  let guardPos = 0
  for (let i = guardPos + 1; i < len; ++i) {
    if (numbers[i] === numbers[guardPos]) counter++
    else if (--counter === 0) {
      guardPos = i++ + 1
      counter = 1
    }
  }

  if (counter >= 1) {
    counter = 0
    for (let each of numbers) {
      if (each === numbers[guardPos]) counter++
    }
    return (counter > numbers.length / 2) ? numbers[guardPos] : 0
  } else {
    return 0
  }
}

export default MoreThanHalfNumSolution
