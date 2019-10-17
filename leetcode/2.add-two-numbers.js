/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let first = new ListNode()
  let head = first
  let carry = 0, res = 0
  let num1 = 0, num2 = 0
  while(l1 || l2){
      num1 = !l1 ? 0 : l1.val
      num2 = !l2 ? 0 : l2.val
      let result = num1+num2+carry
      carry = parseInt(result /10)
      res = result % 10
      let nextNum = new ListNode(res)
      head.next = nextNum
      head=head.next
      if(l1) {
          l1 = l1.next
      }
      if(l2) {
          l2 = l2.next
      }
  }
  if(carry==1) {
      head.next = new ListNode(1)
  }

  return first.next
};
// @lc code=end

