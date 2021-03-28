module.exports = function repeater(str, options) {
  const additionSeparator = new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator || '|');
  const result = new Array(options.repeatTimes).fill(str + (additionSeparator || '')).join(options.separator || '+');
  return result;
};  