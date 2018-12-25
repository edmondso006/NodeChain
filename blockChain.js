let hash = require('object-hash');

class BlockChain {
  constructor(){
    this.chain = [];
    this.curr_transactions = [];
  }

  addNewBlock(prevHash){
    let block = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: this.curr_transactions,
      prevHash: prevHash
    };

    this.block = hash(block);

    this.chain.push(block);
    this.curr_transactions = [];
    return block;
  }

  addNewTransaction(sender, rec, amount){
    this.curr_transactions.push({ sender, rec, amount });
  }

  lastBlock(){
    return this.chain.slice(-1)[0]; //Grabs last element of array
  }

  isEmpty(){
    return this.chain.length == 0;
  }

}

module.exports = BlockChain;