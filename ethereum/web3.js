import Web3 from 'web3';

let web3;

if(typeof window!== 'undefined' && typeof window.web3 !== 'undefined'){
  // We are in the browser and metamask is running.
  // web3 = new Web3(window.web3.currentProvider.enable())
   window.web3.currentProvider.enable();
  web3 = new Web3(window.web3.currentProvider);
}else{
  // We are on the server **OR** the server is not running
  const provider = new Web3.providers.HttpProvider(
  'https://rinkeby.infura.io/v3/31311517a431403990942083549c4763'
);
web3 = new Web3(provider);
};

export default web3;
