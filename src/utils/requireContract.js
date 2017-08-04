import truffleExt from 'truffle-ext'
import {
  web3,
  web3Provider
} from './w3'
const { requireContract } = truffleExt(web3)

export default (contractName) => {
  return requireContract(truffleArtifact(contractName))
}

export function truffleArtifact (contractName) {
  const contract = require(`../../build/artifacts/${contractName}.sol.js`)
  contract.setProvider(web3Provider)
  contract.defaults({
    from: web3.eth.accounts[0],
    gas: 4500000
  })
  return contract
}
