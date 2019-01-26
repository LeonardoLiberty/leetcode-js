/* function ListNode(x){
    this.val = x;
    this.next = null;
} */

// 最终两根指针都走了 l1 + l2 的长度， 必定会相遇
function FindFirstCommonNode (pHead1, pHead2) {
  let pCur1 = pHead1
  let pCur2 = pHead2
  while (pCur1 !== pCur2) {
    pCur1 = pCur1 === null ? pHead2 : pCur1.next
    pCur2 = pCur2 === null ? pHead1 : pCur2.next
  }
  return pCur1
}

export default FindFirstCommonNode
