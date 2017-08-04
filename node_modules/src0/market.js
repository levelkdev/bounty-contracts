import toWei from './utils/toWei'
import shortAddress from './utils/shortAddress'
import requireContract from './utils/requireContract'
const EtherToken = requireContract('EtherToken')

export async function buyEthTokens (amount, address) {
  const etherToken = await EtherToken.deployed()
  const numTokens = toWei(amount)
  console.log(`buy ${numTokens} eth tokens:`)
  const depositTx = await etherToken.deposit({ value: numTokens, from: address })
  console.log(depositTx.output())
}

export async function approveAndBuy (market, buyer, outcome, amount) {
  await approveMarketContractTransfer(market, buyer, amount)
  await buyOutcomeToken(market, buyer, outcome, amount)
}

export async function buyOutcomeToken (market, buyer, outcomeTokenIndex, numTokens) {
  console.log(`${shortAddress(buyer)} buys ${numTokens} of the "${outcomeTokenIndex}" outcome tokens`)
  const maxCost = toWei(100)
  await market.buy(outcomeTokenIndex, numTokens, maxCost, { from: buyer, gas: 4500000 })
}

export async function approveMarketContractTransfer (market, tokenOwner, numEthTokens) {
  const etherToken = await EtherToken.deployed()
  console.log(`approve ${shortAddress(market.address)} to spend ${numEthTokens} of eth tokens owned by ${shortAddress(tokenOwner)}`)
  await etherToken.approve(market.address, numEthTokens, { from: tokenOwner, gas: 4500000 })
}
