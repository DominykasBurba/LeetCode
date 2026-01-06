/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let left = 1;
    for(let right = 1; right < nums.length; right++){
        if(nums[left - 1] != nums[right]) {
            nums[left] = nums[right]
            left++
        } 
    }
    return left;
};




let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));
