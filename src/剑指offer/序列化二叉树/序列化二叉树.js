function TreeNode (x) {
  this.val = Number(x)
  this.left = null
  this.right = null
}

function Serialize (pRoot) {
  if (!pRoot) return '#'
  let re = '' + pRoot.val
  re += ' ' + Serialize(pRoot.left)
  re += ' ' + Serialize(pRoot.right)
  return re
}
function Deserialize (s) {
  const nodes = s.split(' ')
  let i = 0
  return (
    function helper () {
      const curNode = nodes[i++]
      if (!curNode || curNode === '#') return null

      const root = new TreeNode(curNode.val)
      root.left = helper()
      root.right = helper()
      return root
    }())
}

export default { Serialize, Deserialize }
