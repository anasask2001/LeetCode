/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  const a = nums.reduce((acc,curr)=>acc+curr,0)
  const b = nums.join('').split('').reduce((acc,curr)=>acc+Number(curr),0)
  return a-b
};