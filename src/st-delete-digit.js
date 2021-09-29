import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const newAr = Array.from(String(n), Number);
  let maxValue = -Infinity;
  for (let i = 0; i < newAr.length; i++) {
    let res = newAr.slice(0, i).concat(newAr.slice(i+1, newAr.length));
    if (+res.join('') > maxValue) {
      maxValue = +res.join('');
    }
  }
  return maxValue
}
