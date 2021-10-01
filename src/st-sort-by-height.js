import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {

    let indexes1 = [];
    let numsArr = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === -1) {
        indexes1.push(j)
      } else {
        numsArr.push(arr[j])
      }
    }
    console.log(indexes1)
  
    numsArr.sort((a, b) => a - b)
    console.log(numsArr)
    
  
    let res = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
       if (indexes1.includes(i)) {
         res.push(-1)
       } else {
         res.push(numsArr[count])
         count++
       }
     
    }
    console.log(res)
    return res
  }
