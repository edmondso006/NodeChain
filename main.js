let hash = require('object-hash');

let BlockChain = require('./blockChain');

let blockChain = new BlockChain();

let PROOF = 1510;

let validate = (proof) => {
  let guessHash = hash(proof);
  console.log("Hashing: " + guessHash);
  return guessHash === hash(PROOF);
}

let proofOfWork = () => {
  let proof = 0;
  while(true){
    if(!validate(proof)){
      proof++;
    }else{
      break;
    }
  }
  return proof;
}

if(proofOfWork() === PROOF){
  blockChain.addNewTransaction('jeff', 'todd', 100);
  let prevHash = blockChain.lastBlock() ? blockChain.lastBlock().hash : null;
  blockChain.addNewBlock(prevHash);
}

console.log("BlockChain: " + blockChain.chain);