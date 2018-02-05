// script to compile our solidity contract

// Node's system modules to generate path and read files using them
const path = require('path');
const fs = require('fs');

// Module to access solidity compiler
const solc = require('solc');

// generate path to solidity raw source code and access it through source variable
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

/* compile source, access the 'Inbox' ABI from contracts part
 from the object created during compilation*/
module.exports = solc.compile(source, 1).contracts[':Inbox'];
