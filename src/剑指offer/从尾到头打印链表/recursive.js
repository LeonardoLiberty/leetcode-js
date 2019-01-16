/* function ListNode(x){
    this.val = x;
    this.next = null;
} */
function printListFromTailToHead (head) {
  if (!head) return []
  let list = printListFromTailToHead(head.next)
  list.push(head.val)
  return list
}

export default printListFromTailToHead
