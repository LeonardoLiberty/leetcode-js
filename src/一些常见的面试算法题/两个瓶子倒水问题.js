// 题目描述:
// 有两个瓶子容量分别为 a 和 b, 定义三种操作:
//  1. 给任意一个瓶子加满水
//  2. 倒掉任意一个瓶子中的水
//  3. 把一个瓶子中的水倒入领一个瓶子
// 现在要求获得容量为c的水放在任意一个瓶子中
// 求至少需要多少次操作 如果无法完成返回0

// 有一定难度
// https://blog.csdn.net/u014251675/article/details/81572135

// xa + yb = gcd(a, b)
// 尝试找出 d = gcd(a, b)
// 同时找出 一组解 (x, y)
function extendGcd (a, b) {
  if (b === 0) {
    return { x: 1, y: 0, d: a }
  }

  let { x, y, d } = extendGcd(b, a % b)
  let _x = x
  x = y
  y = _x - a / b * y

  return { x: x, y: y, d: d }
}

function minOperations (a, b, c) {
  // 即 ax + by = c = gcd(a, b) * n = d * n
  // extendGcd 求的是 x'a + y'b = gcd(a, b)
  // 所以 x = x' * n , y = y' * n
  let { x, y, d } = extendGcd(a, b)

  if ((c > a && c > b) || c % d) {
    // 目标水量比两个杯子容量都大或者最大公约数不能整除c
    // 无解
    return 0
  } else if (c === a || c === b) {
    // 目标水量即为瓶子容量, 直接装满就可
    return 1
  }
  // 一组可能的解法
  x *= c / d
  y *= c / d

  // 假设的是 x > 0
  // 所以必须确保 x > 0
  if (y > 0) {
    let temp = x
    x = y
    y = temp

    temp = a
    a = b
    b = temp
  }

  let aGcd = a / d
  let bGcd = b / d

  // 最小化 |x| + |y| 则寻找最接近0的解
  // 这样计算k的前提是 x > 0
  let k = Math.floor(a / bGcd)
  x -= k * bGcd
  y += k * aGcd

  // x > 0, y < 0 情况下最接近0的解
  let res
  if (c > a) {
    res = 2 * (x - y)
  } else {
    res = 2 * (x - y - 1)
  }

  // 试试 x < 0, y > 0 情况下的最接近0的姐
  x -= bGcd
  y += aGcd
  if (c > b) {
    res = Math.min(res, 2 * (y - x))
  } else {
    res = Math.min(res, 2 * (y - x - 1))
  }

  return res
}

export default minOperations
