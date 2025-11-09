/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
let nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(i != j && Math.abs(i - j) <= indexDiff && Math.abs(nums[i] - nums[j]) <= valueDiff) {
                return true
            }
        }
    }
    return false
};

console.log(containsNearbyAlmostDuplicate(nums, indexDiff,valueDiff));
