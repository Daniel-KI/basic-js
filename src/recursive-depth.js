const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    return Array.isArray(arr) ? (arr.length === 0 ? 1 : Math.max(...arr.map(nextElement => this.calculateDepth(nextElement))) + 1) : 0;
  }
};
