/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

let s = "a", t = "aa"

var findTheDifference = function(s, t) {
    let newS = s.split('')
    let newT = t.split('')

    for(let i =0 ; i < newT.length; i++) {
        let index = newS.indexOf(newT[i])
        if(index === -1) {
            return newT[i]
        }
        else {
            newS.splice(index, 1)
        }
    }
};

console.log(findTheDifference(s, t))