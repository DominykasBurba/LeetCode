/**
 * @param {number} x
 * @return {number}
 */
let x = 4

var mySqrt = function(x) {
    let i = 0
    while( i * i <= x) {
        i++
    }
    return i-1
};

console.log(mySqrt(x));
