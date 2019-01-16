function TreeNode (x) {
  this.val = x
  this.left = null
  this.right = null
}

function reConstructBinaryTree (pre, vin) {
  if (pre.length === 0 || vin.length === 0) return null

  let root = new TreeNode(pre[0])
  let rootIndex = vin.indexOf(root.val)
  root.left = reConstructBinaryTree(pre.slice(1, rootIndex + 1), vin.slice(0, rootIndex))
  root.right = reConstructBinaryTree(pre.slice(rootIndex + 1), vin.slice(rootIndex + 1))
  return root
}

export default reConstructBinaryTree
