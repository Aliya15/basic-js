import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push(' ');
    } else {
      this.arr.push(value);
    }

    return this
  },
  removeLink(position) {
    if (Number.isInteger(position) && position - 1 >= 0 && position < this.arr.length) {
      delete this.arr[position - 1];
    } else {
      throw new Error();
    }
    return this

  },
  reverseChain() {
    this.arr.reverse();
    return this

  },
  finishChain() {
    let result = this.arr.map((item, index) => {
      if (index === 0) {
        return `( ${item} )`
      } else {
        return `~~( ${item} )`
      }
    }).join('');
    this.arr = []
    return result
  }
};
