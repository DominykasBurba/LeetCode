/**
 * @param {number} x
 * @return {number}
 */

let x = -10
var reverse = function(x) {
    if (num < -(2 ** 31)) {
    return 0;
    }   
    if (x.toString().length === 1) {
        return x
    }
    if(parseInt(x.toString().slice(-1)) === 0) {
        if(isNaN(parseInt(x.toString().slice(0, 1), 10))) {
        return -parseInt(x.toString().slice(0, -1).split('').reverse().join(''))
    }
        return parseInt(x.toString().slice(0, -1).split('').reverse().join(''))
    }
    if(!isNaN(parseInt(x.toString().slice(0, 1), 10))) {
        return parseInt(x.toString().split('').reverse().join(''))
    }
    return -parseInt(x.toString().slice(1).split('').reverse().join(''))
};


const number = reverse(x)
console.log(number)