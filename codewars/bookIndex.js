/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

const nums2 = [5, 6, 7, 8, 9];
const expected2 = "5-9";

const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
const expected3 = "1-3, 7, 9, 15-17";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {
    let result = ""
    
    
    for(let i = 0; i<nums.length; i++){
        if(i==0 || nums[i]-1 !== nums[i-1]){
            let firstNum = nums[i]
            let lastNum = null
            let isConsecutive = true
            let j = i
            while(isConsecutive == true){
                if(nums[j+1] == nums[j]+1||j==nums.length-1){
                    lastNum = nums[j]
                    j++
                }else{
                    
                    isConsecutive = false
                }
                i = j
            }
            console.log(firstNum)
            console.log(lastNum)
            if(lastNum == null && j !== nums.length-1){
                result += firstNum.toString()
                result +=","
            }else if(lastNum == null&&j == nums.length-1){
                result += firstNum.toString()
            }else if(lastNum !== null && j !== nums.length-1){
                result += firstNum.toString()
                result += "-"
                result += lastNum.toString()
                result += ","
            }else if(lastNum !== null && j == nums.length-1){
                result += firstNum.toString()+"-"+lastNum.toString()
                result += "-"
                result += lastNum.toString()
            }
            isConsecutive = true
            firstNum = null
            lastNum = null
        }
    }
    return result
}
console.log(bookIndex(nums1))
// console.log(bookIndex(nums2))

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function bookIndex(pageNums = "") {
    let formattedPageNums = "";
    let pageRangeStartIdx = 0;

    for (let i = 0; i < pageNums.length; i++) {
        let currentPageNum = pageNums[i];
        let nextPageNum = pageNums[i + 1];
        let pageRangeStopIdx = i;

        // page range is not sequential
        if (currentPageNum + 1 !== nextPageNum) {
            // single page, no range
            if (pageRangeStartIdx === pageRangeStopIdx) {
                formattedPageNums += currentPageNum;
            }
            // we have a page range
            else {
                formattedPageNums += `${pageNums[pageRangeStartIdx]}-${pageNums[pageRangeStopIdx]}`;
            }
            if (i !== pageNums.length - 1) {
                formattedPageNums += ", ";
            }

            // Since we've added a page range
            // need to get start idx set up for next page range
            pageRangeStartIdx = i + 1;
        }
    }
    return formattedPageNums;
}

module.exports = { bookIndex };