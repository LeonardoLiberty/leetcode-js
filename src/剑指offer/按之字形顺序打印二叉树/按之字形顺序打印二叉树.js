/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 1. 输出的是值不是node
// 2. 每一层的值需要分别保存
function Print (pRoot) {
  if (!pRoot) return []
  const queue = [null, pRoot]
  const stdout = []

  let leftToRight = true
  while (queue.length !== 1) {
    const node = queue.shift()
    if (node === null) {
      // a new depth
      if (leftToRight) {
        stdout.push(queue.concat().map(each => each.val))
      } else {
        stdout.push(queue.concat().reverse().map(each => each.val))
      }
      leftToRight = !leftToRight
      queue.push(null)
    } else {
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return stdout
}

export default Print
