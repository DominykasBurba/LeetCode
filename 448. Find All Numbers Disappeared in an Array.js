/**
 * @param {number[]} nums
 * @return {number[]}
 */
let nums = [1,1]

// var findDisappearedNumbers = function(nums) {
//     let array = []
//     for(let i = 1; i < nums.length; i++) {
//         let found = false
//         for(let j = 0; j < nums.length + 1; j++) {
//             if(i === nums[j]){
//                 found = true
//                 break
//             }
//         }
//         if (!found) {
//             array.push(i)
//         }
//     }
//     return array
// };

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