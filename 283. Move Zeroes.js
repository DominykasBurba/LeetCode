/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let nums = [0,1,0,3,12]
var moveZeroes = function(nums) {
    let array = []
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            count++
        } else {
            array.push(nums[i])
        }
    }
 
    array.push(...Array(count).fill(0))

    nums.length = 0
    nums.push(...array)

    return nums
};
console.log(moveZeroes(nums));
