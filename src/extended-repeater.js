const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resultStr = '';
  let onePartOfStr = '';
  let currentOptions = {
    repeatTimes: typeof (options.repeatTimes) !== 'undefined' ? options.repeatTimes : 1,
    separator: typeof (options.separator) !== 'undefined' ? options.separator : '+',
    addition: typeof (options.addition) !== 'undefined' ? options.addition : '',
    additionRepeatTimes: typeof (options.additionRepeatTimes) !== 'undefined' ? options.additionRepeatTimes : 0,
    additionSeparator: typeof (options.additionSeparator) !== 'undefined' ? options.additionSeparator : '|'
  };

  onePartOfStr = String(str) + currentOptions.addition;
  for (let i = 0; i < currentOptions.additionRepeatTimes - 1; i++) {
    onePartOfStr += currentOptions.additionSeparator + currentOptions.addition;
  }

  resultStr = onePartOfStr;
  for (let i = 0; i < currentOptions.repeatTimes - 1; i++) {
    resultStr += currentOptions.separator + onePartOfStr;
  }

  return resultStr;
};
