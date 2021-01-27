const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let currentOptions = {
    repeatTimes: typeof (options.repeatTimes) !== 'undefined' ? options.repeatTimes : 1,
    separator: typeof (options.separator) !== 'undefined' ? options.separator : '+',
    addition: typeof (options.addition) !== 'undefined' ? options.addition : '',
    additionRepeatTimes: typeof (options.additionRepeatTimes) !== 'undefined' ? options.additionRepeatTimes : 1,
    additionSeparator: typeof (options.additionSeparator) !== 'undefined' ? options.additionSeparator : '|'
  };

  let additionString = Array(currentOptions.additionRepeatTimes).fill(`${currentOptions.addition}${currentOptions.additionSeparator}`).join('').slice(0, -currentOptions.additionSeparator.length);
  let resultStr = Array(currentOptions.repeatTimes).fill(`${str}${additionString}${currentOptions.separator}`).join('').slice(0, -currentOptions.separator.length);

  return resultStr;
};
