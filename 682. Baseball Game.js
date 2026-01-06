/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let newArray = []
    let sum = 0
    for(let i = 0; i < operations.length; i++) {
        if(!Number.isNaN(Number(operations[i]))) {
            newArray.push(operations[i]);
        }
        else if(operations[i] === "+") {
            newArray.push(parseInt(newArray[newArray.length - 1]) + parseInt(newArray[newArray.length - 2]));
        }
        else if(operations[i] === "D") {
            newArray.push(newArray[newArray.length - 1] * 2);
        }
        else if(operations[i] === "C") {
            newArray.pop(newArray[newArray.length - 1]);
        }
    }
    return sum = newArray.reduce((sum, num) => sum + Number(num), 0)

};

let ops = ["1","C"]
console.log(calPoints(ops));