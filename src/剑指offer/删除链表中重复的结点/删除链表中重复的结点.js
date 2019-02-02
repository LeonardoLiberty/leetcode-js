/* function ListNode(x){
    this.val = x;
    this.next = null;
} */
function deleteDuplication (pHead) {
  if (pHead === null) return null

  let deleteSelf = false
  while (pHead.next && pHead.next.val === pHead.val) {
    pHead.next = pHead.next.next
    deleteSelf = true
  }
  if (deleteSelf) pHead = deleteDuplication(pHead.next)
  else pHead.next = deleteDuplication(pHead.next)
  return pHead
}

export default deleteDuplication
