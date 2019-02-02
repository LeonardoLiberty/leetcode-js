/* function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
} */
function GetNext (pNode) {
  if (pNode === null) return null

  if (pNode.right) {
    // has own right subtree
    let pCur = pNode.right
    while (pCur.left) {
      pCur = pCur.left
    }
    return pCur
  } else {
    while (pNode.next && pNode.next.right === pNode) {
      pNode = pNode.next
    }
    if (pNode.next === null) {
      // it has no parent
      return null
    } else if (pNode.next && pNode.next.left === pNode) {
      // it's the left subtree of its parent
      return pNode.next
    }
  }
}

export default GetNext
