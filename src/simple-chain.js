const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength: function () {
      return this.chain.length
  },
  addLink: function (value) {
      this.chain.push('( ' + value + ' )')
      return this
  },
  removeLink: function (value) {

      if (value > this.getLength()
          || typeof (value) != 'number'
          || value <= 0
          || value - Math.trunc(value) != 0
      ) {
          throw new Error()
      }


      this.chain.splice(value - 1, 1)
      return this
  },
  reverseChain: function () {
      this.chain.reverse()
      return this
  },
  finishChain: function () {

      let resultChain = this.chain.join('~~')
      this.chain = [];
      return resultChain
  }


};

module.exports = chainMaker;
