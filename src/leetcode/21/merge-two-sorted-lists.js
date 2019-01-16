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
var mergeTwoLists = function (l1, l2) {
  if (l1 === null && l2 === null) return null
  let head = {}
  let curNode = head
  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      Object.assign(curNode, l2)
      l2 = l2.next
    } else {
      Object.assign(curNode, l1)
      l1 = l1.next
    }
    curNode.next = {}
    curNode = curNode.next
  }

  while (l1 !== null) {
    Object.assign(curNode, l1)
    l1 = l1.next
    if (!l1) break
    curNode.next = {}
    curNode = curNode.next
  }

  while (l2 !== null) {
    Object.assign(curNode, l2)
    l2 = l2.next
    if (!l2) break
    curNode.next = {}
    curNode = curNode.next
  }

  return head
}

export default mergeTwoLists
