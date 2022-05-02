/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) {
  let highest = null
  let result = []
  let table = {}
  let allSame = true
  for(let i = 0; i<nums.length; i++){
    if(!table.hasOwnProperty(nums[i])){
      table[nums[i]] = 1
    }else{
      table[nums[i]]++
    }
    if(table[nums[i]]>highest){
      highest = table[nums[i]]
    }
    
  }
  
  for(let key in table){
    if(table[key] == highest){
      result.push(parseInt(key))
    }
    if(table[key] != highest){
      allSame = false
    }
  }
  if(Object.keys(table).length == 1){
    allSame = false
  }
  if(allSame == true){
    return []
  }else{
    return result
  }
  
}

console.log(mode(nums1))
console.log(mode(nums2))
console.log(mode(nums3))
console.log(mode(nums4))
console.log(mode(nums5))
/*****************************************************************************/

/**
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(n) linear.
 */
function mode(nums) {
  if (nums.length === 1) {
    return [nums[0]];
  }

  const modes = [];
  const freq = {};
  let maxFreq = 0;
  let allSameFreq = true;

  for (const n of nums) {
    freq.hasOwnProperty(n) ? freq[n]++ : (freq[n] = 1);

    if (freq[n] > maxFreq) {
      maxFreq = freq[n];
    }
  }

  for (const key in freq) {
    if (freq[key] === maxFreq) {
      // Keys are strings, convert back to int. Can be avoided if using a Map.
      modes.push(parseInt(key));
    } else {
      allSameFreq = false;
    }
  }
  // return empty array if allSameFreq, else return modes
  return allSameFreq ? [] : modes;
}

module.exports = { mode };
