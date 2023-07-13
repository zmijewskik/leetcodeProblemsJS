/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// var merge = function (nums1, m, nums2, n) {
//   for (let i = m, j = 0; j < n; i++, j++) {
//     nums1[i] = nums2[j]
//   }
//   nums1.sort((a, b) => a - b)
// }

var merge = function (nums1, m, nums2, n) {
  console.log('Merging: ' + nums1 + ' and ' + nums2)
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  console.log(i, j, k)

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--]
      console.log(nums1)
    } else {
      nums1[k--] = nums2[j--]
      console.log(nums1)
    }
  }
}

let nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
let nums2 = [2, 5, 6]
let n = 3

merge(nums1, m, nums2, n)
console.log('Merged array: ' + nums1)
