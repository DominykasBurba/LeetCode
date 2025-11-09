/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [0,2]

var missingNumber = function(nums) {
    let num;
    for (let i = 0; i <= nums.length; i++) {
        let found = false;
        for (let j = 0; j < nums.length; j++) {
            if (i === nums[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            num = i;
            break;
        }
    }
    return num;
};


const number = missingNumber(nums)
console.log(number);
