/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = []
  memo[0] = memo[1] = 1
  for (let i = 2; i <= n + 1; i++)
    memo[i] = memo[i - 1] + memo[i - 2]
  return memo[n]
};
// @lc code=end

