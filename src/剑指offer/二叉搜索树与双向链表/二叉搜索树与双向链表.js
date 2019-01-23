/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert (pRootOfTree) {
  if (!pRootOfTree) return null

  if (pRootOfTree.left) {
    let prevHead = Convert(pRootOfTree.left)
    while (true) {
      if (!prevHead.right) {
        prevHead.right = pRootOfTree
        pRootOfTree.left = prevHead
        break
      }
      prevHead = prevHead.right
    }
  }
  if (pRootOfTree.right) {
    pRootOfTree.right = Convert(pRootOfTree.right)
    pRootOfTree.right.left = pRootOfTree
  }

  while (pRootOfTree.left) pRootOfTree = pRootOfTree.left
  return pRootOfTree
}

export default Convert
