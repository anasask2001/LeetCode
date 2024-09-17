/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   let p = 0
   for(i=0;i<nums.length;i++){
    if(nums[i]!==0){
        nums[p]=nums[i]
        p++
    }
   }

   for(k=p;k<nums.length;k++){
        nums[p++]=0
   }


    return nums
};