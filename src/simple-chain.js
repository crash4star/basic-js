const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chain.push('( )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || !Number.isInteger(position) || position > this.chain.length) {
      this.chain = [];
      throw new Error();
    } else {
      this.chain.splice(position - 1, 1);
    }

    return this;
  },

  reverseChain() {
    this.chain.reverse();

    return this;
  },

  finishChain() {
    let result = this.chain.join('~~');

    this.chain = [];

    return result;
  }
};

module.exports = chainMaker;
