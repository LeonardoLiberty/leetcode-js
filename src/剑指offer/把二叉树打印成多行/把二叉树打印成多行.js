/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print (pRoot) {
  if (!pRoot) return []
  const queue = [null, pRoot]
  const stdout = []

  while (queue.length !== 1) {
    const node = queue.shift()
    if (node === null) {
      stdout.push(queue.map(node => node.val))
      queue.push(null)
    } else {
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return stdout
}

export default Print
