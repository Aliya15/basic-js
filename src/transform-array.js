import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(initialArray) {
  if (!Array.isArray(initialArray)) {
    throw new Error();
  }

  const arr = [...initialArray];
  
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (i !== arr.length - 1) {
        arr[i + 1] = 'discard';
      }
    } else if (arr[i] === "--discard-prev") {
      if (i > 0) {
        arr[i - 1] = 'discard';
      }
    } else if (arr[i] === "--double-next") {
      if (i !== arr.length - 1) {
        arr[i] = arr[i + 1];
      }
    } else if (arr[i] === "--double-prev") {
      if (i > 0) {
        arr[i] = arr[i - 1];
      }
    }
  }
  return arr.filter((item) => !controls.find(control => control === item))
}
