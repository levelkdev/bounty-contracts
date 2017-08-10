import truffleExt from 'truffle-ext'

export default (contractName, opts) => {
  const { web3 } = opts
  const { requireContract } = truffleExt(web3)
  return requireContract(truffleArtifact(contractName, opts))
}

export function truffleArtifact (contractName, opts) {
  const { web3, from, gas } = opts
  const contract = require(`../build/artifacts/${contractName}.sol.js`)
  contract.setProvider(web3.currentProvider)
  let defaults = {}
  if (from || web3.eth.accounts[0]) {
    defaults.from = from || web3.eth.accounts[0]
  }
  if (gas) {
    defaults.gas = gas
  }
  contract.defaults(defaults)
  return contract
}
