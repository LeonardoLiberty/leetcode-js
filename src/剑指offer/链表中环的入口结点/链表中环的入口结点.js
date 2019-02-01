/* function ListNode(x){
    this.val = x;
    this.next = null;
} */
function EntryNodeOfLoop (pHead) {
  while (pHead) {
    if (pHead.visited) return pHead
    pHead.visited = true
    pHead = pHead.next
  }
  return null
}

export default EntryNodeOfLoop
