/* function ListNode(x){
    this.val = x;
    this.next = null;
} */
function FindKthToTail (head, k) {
  let ptr1 = head
  let ptr2 = head
  let distance = 0
  while (ptr2 !== null) {
    if (distance === k) ptr1 = ptr1.next
    else distance++
    ptr2 = ptr2.next
  }

  // 天坑之k可以大于链表长度, 返回null
  return distance === k ? ptr1 : null
}

export default FindKthToTail
