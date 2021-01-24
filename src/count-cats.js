const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  let searchStr = '^^';
  let count = matrix.flat().filter(str => str === searchStr);
  return count.length;
};
