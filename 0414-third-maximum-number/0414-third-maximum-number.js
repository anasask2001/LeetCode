/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
     
      nums.sort((a,b)=>b-a)
   
     let uniqueNums = [...new Set(nums)];
 
     if(uniqueNums.length<=2){
   
          return Math.max(...uniqueNums)
     }else{
             return uniqueNums[2]
     }
      


};