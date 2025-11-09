/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

let s = "2-5g-3-J", k = 2
var licenseKeyFormatting = function(s, k) {
    let clear = s.replace(/-/g, "").toUpperCase().split('')
    let newArray = []
    let count = 0
    for(let i = clear.length - 1; i >= 0; i--) {
        count++
        newArray.push(clear[i])
        if(newArray.length === clear.length + (clear.length / k - 1)) break

        if(count === k) {
            newArray.push('-')
            count = 0
        }
    }
    return newArray.reverse().join('')
};

console.log(licenseKeyFormatting(s, k));
