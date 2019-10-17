/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if(!strs.length){
    return ''
  }
  var common = strs[0]
  for (const word of strs) {
    while (word.indexOf(common) !== 0) {
      common = common.substring(0, common.length - 1)
      if(common === '') {
        break
      }
    }
  }
  return common
};
// @lc code=end

