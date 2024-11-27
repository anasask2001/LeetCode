/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let s = x.toString()
    let revesd = s.split("").reverse().join("")
    if(s===revesd){
        return true 
    }
    return false
};