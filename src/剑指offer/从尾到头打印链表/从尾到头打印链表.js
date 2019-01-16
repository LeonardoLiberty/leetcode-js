/* function ListNode(x){
    this.val = x;
    this.next = null;
} */
function printListFromTailToHead (head) {
  let re = []
  while (head !== null) {
    re.push(head.val)
    head = head.next
  }
  return re.reverse()
}

export default printListFromTailToHead
