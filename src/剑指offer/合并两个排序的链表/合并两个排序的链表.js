/* function ListNode(x){
    this.val = x;
    this.next = null;
} */
function Merge (pHead1, pHead2) {
  if (!pHead1 || !pHead2) return pHead1 || pHead2
  if (pHead1.val >= pHead2.val) {
    pHead2.next = Merge(pHead1, pHead2.next)
    return pHead2
  } else {
    pHead1.next = Merge(pHead1.next, pHead2)
    return pHead1
  }
}

export default Merge
