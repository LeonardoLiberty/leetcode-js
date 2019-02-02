/* function ListNode(x){
    this.val = x;
    this.next = null;
} */
function deleteDuplication (pHead) {
  let prev = null
  let deleteSelf = false
  let pCur = pHead
  while (pCur) {
    while (pCur.next && pCur.next.val === pCur.val) {
      pCur.next = pCur.next.next
      deleteSelf = true
    }
    if (deleteSelf) {
      if (pCur === pHead) return deleteDuplication(pCur.next)
      prev.next = pCur.next
      pCur = prev.next
      deleteSelf = false
    } else {
      prev = pCur
      pCur = pCur.next
    }
  }

  return pHead
}

export default deleteDuplication
