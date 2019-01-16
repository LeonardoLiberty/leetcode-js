const floorDiv = num => Math.floor(num / 2)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length
  if ((len1 + len2) % 2 === 0) {
    return (findKth(nums1, 0, len1, nums2, 0, len2, floorDiv(len1 + len2)) +
      findKth(nums1, 0, len1, nums2, 0, len2, floorDiv(len1 + len2) + 1)) / 2
  } else {
    return findKth(nums1, 0, len1, nums2, 0, len2, floorDiv(len1 + len2) + 1)
  }
}

/**
 * @name findKth
 * @return {number} the kth biggest number in the set of num1 and num2
 */

const findKth = (nums1, start1, end1, nums2, start2, end2, k) => {
  // make sure nums1 always the longer array
  const len1 = end1 - start1
  const len2 = end2 - start2
  if (len1 < len2) return findKth(nums2, start2, end2, nums1, start1, end1, k)

  // order can not changed since when len2 === 0, num2[start2] => undefine
  if (len2 === 0) return nums1[start1 + k - 1]
  if (k === 1) return Math.min(nums1[start1], nums2[start2])

  // find the last k elements in two arrays
  // drop the smaller set
  const pivot2 = Math.min(len2, floorDiv(k))
  const pivot1 = k - pivot2
  if (nums1[pivot1 + start1 - 1] > nums2[pivot2 + start2 - 1]) {
    // now we can make sure that in nums2
    // from `start2` to `pivot2 + start2 -1`
    // are the smallest num in two arrays
    return findKth(nums1, start1, end1, nums2, start2 + pivot2, end2, k - pivot2)
  } else {
    return findKth(nums1, start1 + pivot1, end1, nums2, start2, end2, k - pivot1)
  }
}

module.exports = findMedianSortedArrays
