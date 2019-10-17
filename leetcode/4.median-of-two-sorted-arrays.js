/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let a = nums1.length - 1,
      b = nums2.length - 1,
      c = a + b + 1
  while(b >= 0) {
      if(a >= 0 && nums1[a] >= nums2[b]){
          nums1[c] = nums1[a]
          a--
      }else {
          nums1[c] = nums2[b]
          b--
      }
      c--
  }
  let mid = Math.floor(nums1.length / 2)
  
  if(nums1.length % 2 === 0){
      return (nums1[mid] + nums1[mid-1]) / 2
  }
  else
      return nums1[mid]
};

// var findMedianSortedArrays = function(nums1, nums2) {
//   nums1 = nums1.concat(nums2).sort((a, b) => a - b)
  
//   let mid = Math.floor(nums1.length / 2)

//   if(nums1.length % 2 === 0){
//       return (nums1[mid] + nums1[mid-1]) / 2
//   }
//   else
//       return nums1[mid]
// };
// @lc code=end

