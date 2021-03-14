const CustomError = require("../extensions/custom-error");

const controls = ["--discard-next", "--discard-prev", "--double-next", "--double-prev", 'discard'];

module.exports = function transform(initialArray) {
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
};
