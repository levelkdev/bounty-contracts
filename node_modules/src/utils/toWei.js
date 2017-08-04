import { web3 } from './w3'

export default function toWei (n) {
  return web3.toWei(n, 'ether')
}
