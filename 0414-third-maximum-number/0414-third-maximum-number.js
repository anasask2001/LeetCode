/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
     
    let uniqueNums = [...new Set(nums)];
       uniqueNums.sort((a,b)=>b-a)
    
    if(uniqueNums.length<=2){
        return Math.max(...uniqueNums)
    }else{
      return  uniqueNums[2]
    }

      


};