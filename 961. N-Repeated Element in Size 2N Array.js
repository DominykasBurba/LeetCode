/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const targetCount = nums.length / 2;
    const map = new Map();

    for (const num of nums) {
        const newCount = (map.get(num) || 0) + 1;
        map.set(num, newCount);
        if (newCount === targetCount) {
            return num;
        }
    }
};