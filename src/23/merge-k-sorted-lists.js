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
  lists = lists.filter(each => each !== null)
  let re = {}
  let curNode = re

  while (lists.length !== 0) {
    let index = -1
    let nullCtr = 0

    for (let i = 0; i < lists.length; ++i) {
      if (lists[i] === null) nullCtr++
      else if (index === -1 || lists[index].val > lists[i].val) index = i
    }
    Object.assign(curNode, lists[index])
    lists[index] = lists[index].next
    if (nullCtr === lists.length - 1 && lists[index] === null) {
      // final element
      break
    } else {
      curNode.next = {}
      curNode = curNode.next
    }
  }
  return Object.keys(re).length === 0 ? null : re
}

export default mergeKLists
