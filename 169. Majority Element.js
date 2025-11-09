/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [2,2,3]

var majorityElement = function(nums) {
    let canditate = nums[0]
    let value = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === canditate) {
            value++
            canditate = nums[i]
        } 
        else if(value === 0) {
            value++
            canditate = nums[i]
        }
        else {
            value--
        }
    }
    return canditate
};
console.log(majorityElement(nums));
