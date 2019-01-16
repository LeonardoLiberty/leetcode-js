/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 1. 返回值实际是一个array, 这里实际上没有说清楚.
// 2. 刚开始考虑的是将两个值转化为数字然后相加后再转回list
//  + 这种思路缺陷在于没有考虑到超大数字 i.e. 超出js能表示的数字
//  + 实际上由于两个链表的头都是个位数, 所以只需要按照加法规则往后算即可.

var addTwoNumbers = function (l1, l2) {
  let leftNode = l1
  let rightNode = l2
  let shift = 0
  let array = []

  while (leftNode || rightNode || shift) {
    let leftVal = leftNode ? leftNode.val : 0
    let rightVal = rightNode ? rightNode.val : 0
    let val = (leftVal + rightVal + shift) % 10
    shift = Math.floor((leftVal + rightVal + shift) / 10)
    array.push(val)

    leftNode = leftNode ? leftNode.next : null
    rightNode = rightNode ? rightNode.next : null
  }

  return array
}

function list2num (list) {
  let num = 0
  let count = 0
  let curNode = list
  while (curNode) {
    num += curNode.val * 10 ** count
    curNode = curNode.next
    count++
  }
  return num
}

function num2list (num) {
  let head = {}
  let curNode = head
  let curNum = num
  while (true) {
    curNode.val = curNum % 10
    curNum = Math.floor(curNum / 10)
    curNode.next = null
    if (curNum === 0) break
    curNode.next = {}
    curNode = curNode.next
  }
  return head
}

// 测试辅助函数
export { list2num, num2list }
export default addTwoNumbers
