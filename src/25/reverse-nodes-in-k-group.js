/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const tryReverse = (head) => {
    // test if there are k nodes from head
    let end = null
    for (let i = 0, cur = head; i < k; ++i, cur = cur.next) {
      if (cur === null) return {}
      // final loop
      if (i === k - 1) end = cur.next
    }

    let newTail = head
    let newHead
    for (let i = 0, cur = head, prev = null; i < k; ++i) {
      let next = cur.next
      if (prev !== null) cur.next = prev
      prev = cur
      if (i === k - 1) newHead = cur
      else cur = next
    }
    newTail.next = end
    return { newHead, newTail }
  }

  if (k === 1) return head
  let prev = null
  let cur = head
  while (true) {
    const { newHead, newTail } = tryReverse(cur)
    if (!newHead && !newTail) break
    if (prev === null) head = newHead
    else prev.next = newHead
    prev = newTail
    cur = newTail.next
  }
  return head
}

export default reverseKGroup
