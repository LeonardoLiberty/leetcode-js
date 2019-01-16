/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (n === 0) return head
  let arrayList = []
  let curNode = head
  while (curNode !== null) {
    arrayList.push(curNode)
    curNode = curNode.next
  }
  let len = arrayList.length
  if (len === n) return head.next
  arrayList[len - n - 1].next = arrayList[len - n].next
  return head
}

export default removeNthFromEnd
