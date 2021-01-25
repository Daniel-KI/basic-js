const CustomError = require("../extensions/custom-error");

const chainMaker = {

  connectionSign: '~~',
  chain : [],

  getLength() {
    return this.chain.getLength;
  },
  addLink(value) {
    this.chain.push('( '+ value + ' )');
    return this;
  },
  removeLink(position) {
    if (position >= 1 && position <= this.chain.length) {
        this.chain.splice(position - 1, 1);
        return this;
    }
    this.chain = [];
    throw new Error();
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    var finalChain = this.chain.join(this.connectionSign);
    this.chain = [];
    return finalChain;
  }
};

module.exports = chainMaker;
