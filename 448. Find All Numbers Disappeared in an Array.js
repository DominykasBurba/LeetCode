/**
 * @param {number[]} nums
 * @return {number[]}
 */
let nums = [4,3,2,7,8,2,3,1]

var findDisappearedNumbers = function(nums) {
    let setmap = new Set(nums)
    let result = []
    for(let i = 1; i < nums.length + 1; i++) {
        if(!setmap.has(i)) {
            result.push(i)
        }
    }
    return result
};

console.log(findDisappearedNumbers(nums))