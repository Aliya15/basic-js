import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matr) {
  const cat = "^^";
  let counter = 0;
  for (let i = 0; i < matr.length; i++) {
    for (let j = 0; j < matr[i].length; j++) {
     if (matr[i][j] === cat) {
       counter++
     } 
    }
  }
  return counter;
}
