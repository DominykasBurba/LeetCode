/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let left = 0, right = numbers.length - 1;

    while(numbers[left] + numbers[right] != target) {
        let sum = numbers[left] + numbers[right];
        if(sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return [left + 1, right + 1];
};

let numbers = [5, 25, 75], target = 100
console.log(twoSum(numbers, target));