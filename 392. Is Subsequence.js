/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

let s = "abc", t = "ahbgdc"

var isSubsequence = function(s, t) {
    let j = 0
    for(let i = 0 ; i < s.length; i++) {
        let found = false
        for(; j < t.length; j++) {
            if(s[i] === t[j]) {
                found = true
                j++
                break
            }
        }
        if(found === false) return false
    }
    return true
};

console.log(isSubsequence(s, t));
