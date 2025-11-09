/**
 * @param {number} n
 * @return {boolean}
 */
let n = 1111111
var isHappy = function(n) {
    let nString = n.toString()
    let sum = 0

    for(let i = 0; i< nString.length; i++) {
        sum += (parseInt(nString[i] ** 2, 10))
    }
    result = sum
    if(result === 1) return true
    else if (sum.toString().length === 1 && result != 7) return false
    return isHappy(result)
};

console.log(isHappy(n))