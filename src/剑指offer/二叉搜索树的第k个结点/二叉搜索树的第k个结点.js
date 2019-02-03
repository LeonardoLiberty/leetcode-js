/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode (pRoot, k) {
  function helper (pRoot) {
    if (!pRoot || re) return

    helper(pRoot.left)
    if (k === 1 && re === null) {
      // 要返回节点 而不是值
      re = pRoot
      return
    } else {
      k--
    }
    helper(pRoot.right)
  }

  let re = null
  helper(pRoot)

  return re
}

export default KthNode
