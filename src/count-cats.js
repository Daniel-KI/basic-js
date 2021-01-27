const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const SEARCH_STR = '^^';
  let count = matrix.flat().filter(str => str === SEARCH_STR);
  return count.length;
};
