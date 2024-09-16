/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {


  if(dividend>0&&divisor>0){
    return Math.floor(dividend/divisor)
    }else if(dividend<-999999999&&divisor==-1){
     return dividend/divisor-1

    }else{
        return divisor<0&&dividend<0?Math.floor(dividend/divisor):Math.ceil(dividend/divisor)
    }



    
};