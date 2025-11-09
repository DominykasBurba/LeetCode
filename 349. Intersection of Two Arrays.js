/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]

var intersection = function(nums1, nums2) {
    let seen = new Set()
    for(let i = 0 ; i< nums1.length; i++) {
        let found = false
        for(let j = 0 ; j < nums2.length; j++) {
            if(nums1[i] === nums2[j]) {
                found = true
                break
            }
        }
        if(found) {
            seen.add(nums1[i])
        }
    }
    return Array.from(seen)
};

console.log(intersection(nums1, nums2))