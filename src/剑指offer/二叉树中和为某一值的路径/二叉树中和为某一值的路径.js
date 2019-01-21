/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function FindPath (root, expectNumber) {
  let re = []
  if (!root) return re
  // 天坑 往下一直到叶节点才算数
  // 天坑2 打印的是数字不是节点
  // 真的脑残
  let isLeafNode = !root.left && !root.right
  if (root.val === expectNumber && isLeafNode) {
    re.push([root.val])
  } else {
    let paths = FindPath(root.left, expectNumber - root.val)
    paths.forEach(path => {
      path.unshift(root.val)
      re.push(path)
    })

    paths = FindPath(root.right, expectNumber - root.val)
    paths.forEach(path => {
      path.unshift(root.val)
      re.push(path)
    })
  }
  return re.sort((a, b) => b.length - a.length)
}

export default FindPath
