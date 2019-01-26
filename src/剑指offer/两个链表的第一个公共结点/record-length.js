/* function ListNode(x){
    this.val = x;
    this.next = null;
} */
function FindFirstCommonNode (pHead1, pHead2) {
  let pCur1 = pHead1
  let pCur2 = pHead2
  let len1 = 0
  let len2 = 0
  while (pCur1 != null) {
    pCur1 = pCur1.next
    len1 += 1
  }
  while (pCur2 != null) {
    pCur2 = pCur2.next
    len2 += 1
  }

  pCur1 = pHead1
  pCur2 = pHead2
  while (len1 !== len2) {
    if (len1 > len2) {
      pCur1 = pCur1.next
      len1--
    } else {
      pCur2 = pCur2.next
      len2--
    }
  }

  while (true) {
    if (pCur1 === pCur2) return pCur1
    pCur1 = pCur1.next
    pCur2 = pCur2.next
  }
}

export default FindFirstCommonNode
