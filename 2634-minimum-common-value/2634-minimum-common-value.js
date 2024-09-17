/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {

      let setNums2 = new Set(nums2);

    for (let num of nums1) {
        if (setNums2.has(num)) { 
            return num;
        }
    }
    
    return -1; 
 
};