/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function IsBalancedSolution (pRoot) {
  function helper (pRoot) {
    if (pRoot === null) return { balanced: true, height: 0 }
    let leftResult = helper(pRoot.left)
    if (!leftResult.balanced) return { balanced: false }
    let rightResult = helper(pRoot.right)
    if (!rightResult.balanced || Math.abs(leftResult.height - rightResult.height) > 1) {
      return { balanced: false }
    }
    return {
      balanced: true,
      height: Math.max(leftResult.height, rightResult.height) + 1
    }
  }
  return helper(pRoot).balanced
}

export default IsBalancedSolution
