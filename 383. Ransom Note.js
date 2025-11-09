/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
let ransomNote = "aa", magazine = "aab"


var canConstruct = function(ransomNote, magazine) {

    var newMagazine = magazine.split('')
    var newRansomNote = ransomNote.split('')

    for(let i = 0; i < newRansomNote.length; i++) {
        let index = newMagazine.indexOf(newRansomNote[i])
        if(index === -1) {
            return false
        } else {
            newMagazine.splice(index , 1)
        }
    }
    return true
}

console.log(canConstruct(ransomNote, magazine))