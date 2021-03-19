const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    
    if(value !== undefined) this.chain.push(value)
    else this.chain.push('')    
    
    return this
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here

    if (Number.isInteger(position)) {      
      if (this.chain[position-1] !== undefined ) {         
        this.chain.splice(position-1, 1)        
      } 
    } else {
      this.chain = []
      throw ("parameter is not a number");
    }
    return this
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    
    this.chain.reverse()
    
    return this
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let stringChain = ''

    if (this.chain == []) {      
      return ''  
    }

    stringChain = '( ' + this.chain[0] + ' )'
    for (let i = 1; i < this.chain.length; i++) {
      stringChain = stringChain + '~~( ' + this.chain[i] + ' )'      
    }

    this.chain = []    
    return stringChain
  }
};

module.exports = chainMaker;
