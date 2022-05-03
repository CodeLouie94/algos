// Interview question from a company that has Google, Dropbox, and Zillow as clients.

const start1 = 5;
const end1 = 5;
const expected1 = [5];

const start2 = 5;
const end2 = 6;
const expected2 = [5, 6];

const start3 = 10;
const end3 = 3;
const expected3 = [10, 11, 12, 1, 2, 3];

const start4 = 12;
const end4 = 12;
const expected4 = [12];

const start5 = 12;
const end5 = 2;
const expected5 = [12, 1, 2];

const start6 = -1;
const end6 = 4;
const expected6 = [];

const start7 = -1;
const end7 = 15;
const expected7 = [];

const start8 = 5;
const end8 = 15;
const expected8 = [];

/**
 * Gets all the months for the given inclusive range.
 * @param {number} start Start month.
 * @param {number} end End month.
 * @returns {number[]} Start to end month range inclusive.
 */
function monthRange(start, end) {
    let result = []
    let current = start

    if(current == end){
        result.push(current)
        return result
    }else if(current <=0 || current >=13 || end <= 0 || end >=13){
        return []
    }

    while (current != end) {
        if (current != 13) {
            result.push(current)
        }else{
            current = 1
            result.push(current)
        }
        current++
    }

    if(current != 12){
        result.push(current)
    }else{
        result.push(1)
    }

    return result
}
console.log(monthRange(start1, end1))
console.log(monthRange(start2, end2))
console.log(monthRange(start3, end3))
console.log(monthRange(start4, end4))
console.log(monthRange(start5, end5))
console.log(monthRange(start6, end6))
console.log(monthRange(start7, end7))
console.log(monthRange(start8, end8))
    /**
     * Gets all the months for the given inclusive range.
     * @param {number} start Start month.
     * @param {number} end End month.
     * @returns {number[]} Start to end month range inclusive.
     */
    function monthRange(start, end) {
        if (!(start > 0 && end > 0 && start <= 12 && end <= 12)) {
            return [];
        }

        if (start === end) {
            return [start];
        }

        const months = [];
        let monthNum = start;

        while (monthNum !== end) {
            months.push(monthNum);

            if (monthNum === 12) {
                monthNum = 0;
            }
            monthNum++;
        }

        months.push(end);
        return months;
    }

    function monthRange(start, end) {
        if (!(start > 0 && end > 0 && start <= 12 && end <= 12)) {
            return [];
        }

        if (start === end) {
            return [start];
        }

        const months = [];
        const count = start < end ? end - start : 12 - start + end;

        for (let n = start, i = 0; i < count + 1; n++, i++) {
            months.push(n === 12 ? 12 : n % 12);
        }

        return months;
    }

    module.exports = {
        monthRange,
    };