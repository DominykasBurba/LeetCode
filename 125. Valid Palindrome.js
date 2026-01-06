/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let trim = s.replaceAll(" ", "");
    let trimsplit = trim.split("");
    
    let list = []
    trimsplit.forEach(element => {
        if(!Number.isNaN(Number(element)) || element.toLowerCase() !== element.toUpperCase()) {
            list.push(element);
        }
    });
    
    let finalList = list.join("");
    let reverseList = list.reverse();
    let finalReserveList = reverseList.join("");

    if(finalList == finalReserveList) {
        return true;
    } else {
        return false;
    }
};

let s = "0P"
console.log(isPalindrome(s));