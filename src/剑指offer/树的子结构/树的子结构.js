/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 这道题题意不清晰, 实际上这里子结构的意思
// 例如 A                       B
//        3                     3
//     4      5              4      5
//   6   7   8   9
// 应该返回true
function equalTree (tree1, tree2) {
  // 实际上是指tree2有值的这部分匹配到tree1就行了
  if (tree2 === null) return true
  if (tree1 === null) return false

  return (tree1.val === tree2.val &&
    equalTree(tree1.left, tree2.left) &&
    equalTree(tree1.right, tree2.right))
}

function HasSubtree (pRoot1, pRoot2) {
  if (!pRoot1 || !pRoot2) return false

  return (equalTree(pRoot1, pRoot2) ||
    HasSubtree(pRoot1.left, pRoot2) ||
    HasSubtree(pRoot1.right, pRoot2))
}

export default HasSubtree
