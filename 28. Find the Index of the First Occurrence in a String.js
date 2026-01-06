/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let right = needle.length;

    for(let left = 0; left <= haystack.length - needle.length; left++) {
        if(haystack.slice(left, left + right) === needle) {
            return left;
        }
    }
    return -1;
};

let haystack = "a", needle = "a"
console.log(strStr(haystack, needle));
