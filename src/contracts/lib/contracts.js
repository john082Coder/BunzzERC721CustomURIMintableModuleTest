// import Web3 from 'web3'
import * as Types from './types.js';
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,

} from './constants.js';


import Erc20Abi from './abi/erc20.json';

import Erc721MintRoleAbi from './abi/erc721MintRole.json' 

export class Contracts {
  constructor(provider, networkId, web3, options) {
    this.web3 = web3;
    this.defaultConfirmations = options.defaultConfirmations;
    this.autoGasMultiplier = options.autoGasMultiplier || 1.5;
    this.confirmationType =
        options.confirmationType || Types.ConfirmationType.Confirmed;
    this.defaultGas = options.defaultGas;
    this.defaultGasPrice = options.defaultGasPrice;
    console.log("this web3 = ", this.web3);
   
  
    this.erc20 = new this.web3.eth.Contract(Erc20Abi);

  
    this.erc721MintRole = new this.web3.eth.Contract(Erc721MintRoleAbi);


    this.setProvider(provider, networkId);
    this.setDefaultAccount(this.web3.eth.defaultAccount);
  }

  setProvider(provider, networkId) {
    const setProvider = (contract, address) => {
      contract.setProvider(provider);
      if (address) contract.options.address = address;
      else console.error('Contract address not found in network', networkId);
    }

  
   
    setProvider(this.erc721MintRole, contractAddresses.erc721MintRole[networkId]);
   

   
  }

  setDefaultAccount(account) {
   
  }
}
