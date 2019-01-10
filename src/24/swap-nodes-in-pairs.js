/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let prev = null
  for (let cur = head; cur && cur.next; cur = cur.next) {
    let next1 = cur.next
    let next2 = cur.next.next
    cur.next.next = cur
    cur.next = next2
    if (prev === null) head = next1
    else prev.next = next1
    prev = cur
  }
  return head
}

export default swapPairs
