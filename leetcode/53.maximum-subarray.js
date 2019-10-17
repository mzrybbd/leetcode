/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxArr = nums[0]
  let acuArr = nums[0]

  for (let i = 1; i < nums.length; i++) {
    maxArr = Math.max(maxArr + nums[i], nums[i])
    acuArr = Math.max(maxArr, acuArr)
  }
  return acuArr
};
// @lc code=end

