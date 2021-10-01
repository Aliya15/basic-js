import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let arr = str.split('');
  let counter = 1;
  if (str.length === 0) {
    return ''
  }
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      counter++
    } else if (arr[i] !== arr[i+1] && counter !== 1) {
      res += counter + arr[i]
      counter = 1  
    } else if (arr[i] !== arr[i+1] && counter === 1) {
      res += arr[i]
    }
  }
  return res;
}
