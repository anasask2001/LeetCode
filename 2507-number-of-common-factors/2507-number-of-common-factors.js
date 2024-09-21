/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
    let result = 0
    let min = Math.min(a, b)

    for (i = 1; i <= min; i++) {
        if (a % i == 0 && b % i == 0) {

            result++
        }


    }

        return result
};