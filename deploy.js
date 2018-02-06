const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'infant danger wrestle panel often tent axis monitor era march surprise name',
  'https://rinkeby.infura.io/6Ej7JhgUxlfo8bqlhW38'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy contract from Account', accounts[0]);

  const deployResult =  await new web3.eth.Contract(JSON.parse(interface))
                 .deploy({ data: bytecode, arguments: ['Hi there!'] })
                 .send({ from: accounts[0], gas: '1000000'});
  console.log('Contract deployed on the node : ', deployResult.options.address);
};

deploy();
