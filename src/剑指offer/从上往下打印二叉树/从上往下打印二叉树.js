/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom (root) {
  if (!root) return []
  let re = []
  let list = [root]
  while (list.length !== 0) {
    let newList = []
    for (let curNode of list) {
      // 天坑, 要打印 val 而不是 node, 题目没说清楚
      re.push(curNode.val)
      curNode.left && newList.push(curNode.left)
      curNode.right && newList.push(curNode.right)
    }
    list = newList
  }
  return re
}

export default PrintFromTopToBottom
