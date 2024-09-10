/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
  const result = x.toString()
  const result1=result.split("").reverse().join("")
  if(result == result1){
    return true
  }
 
return false
};