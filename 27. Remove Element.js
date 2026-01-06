/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0;

    for(let right = 0; right < nums.length; right++) {
        if(nums[right] === val) {
            continue;
        } else {
            nums[left] = nums[right]
            left++;
        }
    }
    return left;
};

let nums = [3,2,2,3], val = 3
console.log(removeElement(nums, val));
