/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const arr = []
   for(i=0;i<nums.length;i++){
         arr.push(nums[i])
   }
     for(i=0;i<nums.length;i++){
         arr.push(nums[i])
   }

return arr
};