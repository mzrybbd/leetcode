/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let arr1 = nums1.slice(0, m)
  let arr2 = nums2.slice(0, n)
  let res = arr1.concat(arr2).sort((a, b) => a - b)
  nums1 = nums1.splice(0, nums1.length, ...res)
  return nums1
};

var merge = function (nums1, m, nums2, n) {
  let a = m - 1;
  let b = n - 1;
  let c = m + n - 1;
  while(b >= 0){
    if(a >= 0 && nums1[a] >= nums2[b]){
      nums1[c] = nums1[a]
      a--
    }else {
      nums1[c] = nums2[b]
      b--
    }
    c--
  }
  return nums1
 }
// @lc code=end

