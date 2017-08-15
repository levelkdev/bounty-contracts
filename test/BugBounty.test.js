/* global describe test expect */

import web3 from 'helpers/web3'
import BugBounty from 'BugBounty'

const { accounts } = web3.eth

const opts = {
  web3: web3,
  from: accounts[0],
  gas: 4500000
}

const codeHash = 'rza'
const claimHash = 'CLAIM_HASH'
const resolutionHash = 'RESOLUTION_HASH'
const initialBalance = 30000000000000000000000
const payout = 3

describe('BugBounty', () => {
  test('creating with valid params should succeed', async () => {
    expect((await newBugBounty()).address).toBeDefined()
  })

  test('resolveClaim should throw if sender is not owner', async () => {
    const bugBounty = await newBugBounty()

    // TODO: Figure out why EVM error gets logged but doesn't get caught by asyncExpectErr
    const err = await asyncExpectErr(
      bugBounty.resolveClaim(claimHash, resolutionHash, 1000, { from: accounts[1] })
    )
    expect(err).toBeDefined()
  })

  test('BugBounty is initialized with the correct parameters', async () => {
    const bugBounty = await newBugBounty()
    const state = await bugBounty.state()
    expect(parseInt(state.props.payoutCritical)).toEqual(500)
    expect(parseInt(state.props.payoutHigh)).toEqual(400)
    expect(parseInt(state.props.payoutMedium)).toEqual(300)
    expect(parseInt(state.props.payoutLow)).toEqual(200)
    expect(parseInt(state.props.payoutNote)).toEqual(100)
    // TODO: check codeHash is expected value
  })

  test('BugBounty is initialized with the correct balance', async () => {
    const bugBounty = await newBugBounty()
    expect(parseInt(web3.eth.getBalance(bugBounty.address))).toEqual(initialBalance)
  })

  test('fileClaim does create valid claim', async () => {
    const bugBounty = await newBugBounty()
    await bugBounty.fileClaim(claimHash)
    const isClaim = await bugBounty.isClaim(claimHash)
    expect(isClaim).toEqual(true)
  })

  test('resolveClaim does resolve claim', async () => {
    const bugBounty = await newBugBounty()
    await bugBounty.fileClaim(claimHash)
    await bugBounty.resolveClaim(claimHash, resolutionHash, payout)
    const isResolved = await bugBounty.isResolved(claimHash)
    expect(isResolved).toEqual(true)
  })
})

async function newBugBounty () {
  const bugBounty = await tryAsync(
    BugBounty(opts).new(500, 400, 300, 200, 100, codeHash, { from: accounts[0], value: initialBalance })
  )
  return bugBounty
}

async function tryAsync (asyncFn) {
  try {
    return await asyncFn
  } catch (err) {
    console.error(err)
  }
}

async function asyncExpectErr (asyncFn) {
  try {
    await asyncFn
  } catch (err) {
    return err
  }
}
