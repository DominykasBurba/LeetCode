/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {

    const result = []


    for (let i = left; i <= right; i++) {
        let num = i.toString();
        let isDividing = true;

        for (let char of num) {
            let digit = Number(char);

            if(digit === 0 || i % digit !== 0) {
                isDividing = false;
                break;
            }
        }

        if(isDividing) {
            result.push(i);
        }
    }

    return result;
};
console.log(selfDividingNumbers(10, 13))