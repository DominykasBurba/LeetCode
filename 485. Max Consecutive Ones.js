/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxcount = 0;
    let count = 0;
    for (let i = 0; i <= nums.length; i++) {
        if(nums[i] == 1) {
            count++;
        } else {
            if (maxcount < count) {
                maxcount = count;
                count = 0;
            } else {
                count = 0;
            }
        }
    }
    return maxcount;
};

let nums = [1,0,1,1,0,1]
console.log(findMaxConsecutiveOnes(nums));