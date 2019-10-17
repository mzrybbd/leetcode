/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.replace(/\s*$/, '')
  let strArr = s.split(/\s+/)
  return strArr.pop().length
};
// @lc code=end

