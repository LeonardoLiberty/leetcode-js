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
  const floorHalf = num => Math.floor(num / 2)
  const splitAndMerge = (start, end) => {
    if (start === end) return null
    if (start === end - 1) return lists[start]

    // at least two
    let num = end - start
    let list1 = splitAndMerge(start, start + floorHalf(num))
    let list2 = splitAndMerge(start + floorHalf(num), end)

    // merge list1 list2
    let head = {}
    let curNode = head
    while (list1 !== null && list2 !== null) {
      if (list1.val > list2.val) {
        Object.assign(curNode, list2)
        list2 = list2.next
      } else {
        Object.assign(curNode, list1)
        list1 = list1.next
      }
      curNode.next = {}
      curNode = curNode.next
    }

    while (list1 !== null) {
      Object.assign(curNode, list1)
      list1 = list1.next
      if (list1 === null) break
      curNode.next = {}
      curNode = curNode.next
    }

    while (list2 !== null) {
      Object.assign(curNode, list2)
      list2 = list2.next
      if (list2 === null) break
      curNode.next = {}
      curNode = curNode.next
    }

    return Object.keys(head).length === 0 ? null : head
  }

  return splitAndMerge(0, lists.length)
}

export default mergeKLists
