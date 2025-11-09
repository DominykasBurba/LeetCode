/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let sum =0;
    if(n === 0) return 0;
    if(n === 1) return 1;
    return sum = fib(n-1) + fib(n-2);
};

console.log(fib(4));