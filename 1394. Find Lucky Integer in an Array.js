/**
 * @param {number[]} arr
 * @return {number}
 */
let arr = [1,2,2,3,3,3]
var findLucky = function(arr) {
    let count = 0
    let seen = new Set()
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                count++
            }
        }
        if(count === arr[i]) {
            seen.add(arr[i])
        }
        count = 0
    }
    return seen.size ? Math.max(...seen) : -1
};

console.log(findLucky(arr));
