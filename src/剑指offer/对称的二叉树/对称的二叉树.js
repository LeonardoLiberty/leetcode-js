/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function symmetric (pRoot) {
  if (pRoot === null) return null

  let pRoot2 = Object.assign({}, pRoot)
  const left = symmetric(pRoot2.right)
  const right = symmetric(pRoot2.left)
  pRoot2.left = left
  pRoot2.right = right
  return pRoot2
}

function equalTree (tree1, tree2) {
  if (tree1 === null && tree2 === null) return true
  if (tree1 === null || tree2 === null) return false
  return tree1.val === tree2.val &&
    equalTree(tree1.left, tree2.left) &&
    equalTree(tree1.right, tree2.right)
}

function isSymmetrical (pRoot) {
  let pRoot2 = symmetric(pRoot)
  return equalTree(pRoot, pRoot2)
}
export default isSymmetrical
