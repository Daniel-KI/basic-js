const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array)) throw "Error";

  let transformedArr = [];
  let isImpacted = false;

  for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-next':
          if (i !== arr.length - 1) {
            i++;
            isImpacted = true;
          }
          break;
        case '--discard-prev':
          if (i !== 0 && !isImpacted) {
            transformedArr.pop();
          }
          break;
        case '--double-next':
          if (i !== arr.length - 1) {
            transformedArr.push(arr[i+1])
          }
          break;
        case '--double-prev':
          if (i !== 0 && !isImpacted) {
            transformedArr.push(arr[i-1]);
          }
          break;
        default:
          transformedArr.push(arr[i]);
          isImpacted = false;
    }
  }
  return transformedArr;
};
