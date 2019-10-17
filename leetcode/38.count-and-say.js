/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let res = '1'
  let count = 1
  while (count < n) {
    res = countnsay2(res)
    count++
  }
  return res;
};
var countnsay2 = function (str) {
  let index = 0,
    count = 1,
    res = ''
  while (index < str.length - 1) {
    if (str[index] === str[index + 1]) {
      index++;
      count++
    } else {
      res += count.toString() + str[index]
      index++;
      count = 1
    }
  }

  res += count.toString() + str[index]

  return res
}
// @lc code=end

