/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // this stupid question has quite a lot corner cases
  // including a list of null
  lists = lists.filter(each => each !== null)
  if (lists.length === 0) return null
  let re = {}
  let curNode = re

  while (lists.length !== 0) {
    let index = -1

    for (let i = 0; i < lists.length; ++i) {
      if (index === -1 || lists[index].val > lists[i].val) index = i
    }
    Object.assign(curNode, lists[index])
    lists[index] = lists[index].next
    if (lists[index] === null) lists.splice(index, 1)
    if (lists.length === 0) {
      curNode.next = null
    } else {
      curNode.next = {}
      curNode = curNode.next
    }
  }
  return re
}

export default mergeKLists
