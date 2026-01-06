/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let output = [];

    for (let i = 0; i < nums1.length; i++) {
        let position = -1;
        for (let j = 0; j < nums2.length; j++) {
            if (nums2[j] === nums1[i]) {
                position = j;
                break;
            }
        }

        let ans = -1;
        for (let j = position + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                ans = nums2[j];
                break;
            }
        }
        output.push(ans);
    }

    return output;
};

let nums1 = [2,4], nums2 = [1,2,3,4]
console.log(nextGreaterElement(nums1, nums2));
