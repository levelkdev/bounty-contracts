import Web3 from 'web3'

let web3 = new Web3(
  new Web3.providers.HttpProvider('http://localhost:8545')
)
web3.eth.defaultAccount = web3.eth.accounts[0]

export default web3
