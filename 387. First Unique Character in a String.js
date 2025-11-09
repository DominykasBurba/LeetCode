/**
 * @param {string} s
 * @return {number}
 */
let s = "aabb"
var firstUniqChar = function(s) {
    for(let i =0; i < s.length; i++) {
        let found = false
        let j = 0
        for (; j <s.length; j++) {
            if(i === j || s[i] != s[j]) {
                found = false
            } else {
                found = true
                break
            }
        }
        if(!found) {
            return i
        }
    }
    return -1
};
console.log(firstUniqChar(s));
