/**
 * @param {number} num
 * @return {number}
 */
let num = 38
var addDigits = function(num) {
    let numString = num.toString()
    let newNum = 0
    for(let i = 0; i < numString.length; i++) {
        newNum += parseInt(numString[i])
    }
    if(newNum >= 10) {
        return addDigits(newNum)
    } else {
        return newNum
    }
}
console.log(addDigits(num));
