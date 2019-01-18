/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror (root) {
  if (!root) return root

  let newLeft = Mirror(root.right)
  let newRight = Mirror(root.left)
  root.left = newLeft
  root.right = newRight
  return root
}

export default Mirror
