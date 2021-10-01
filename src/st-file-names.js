import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let counter = 0;
  console.log(names)
  let res = [];
  res.push(names[0])
  for (let i = 0; i <= names.length; i++) {

    for(let j = 1; j <= names.length; j++) {
      if (names[i] !== names[j]) {
        res.push(names[j]);
      } else if (names[i] !== names[j] && res.includes(names[i])) {
        counter++
        res.push(names[j] + '(' + counter + ')')
      } else if (names[i] !== names[j] && !res.includes(names[i])) {
        counter = 1;
        res.push(names[j] + '(' + counter + ')')
      }
    }
  }
  return res;
}
