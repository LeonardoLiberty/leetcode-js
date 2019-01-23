/* function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
} */
function Clone (pHead) {
  let cur = pHead
  let pHead2 = null
  let cur2
  while (cur) {
    if (pHead2 === null) {
      pHead2 = cur2 = Object.assign({}, cur)
    } else {
      cur2.next = Object.assign({}, cur)
      cur2 = cur2.next
    }

    cur.copy = cur2
    cur = cur.next
  }

  cur2 = pHead2
  while (cur2) {
    if (cur2.random) cur2.random = cur2.random.copy
    cur2 = cur2.next
  }

  cur = pHead
  while (cur) {
    delete cur.copy
    cur = cur.next
  }

  return pHead2
}

export default Clone
