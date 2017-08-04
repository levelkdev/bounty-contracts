/* global describe test expect */

import { web3 } from 'utils/w3'
import BugBounty from 'BugBounty'

const { accounts } = web3.eth

describe('BugBounty', () => {
  test('creating with valid params should succeed', async () => {
    expect((await newBugBounty()).address).toBeDefined()
  })

  test('resolveClaim should throw if sender is not owner', async () => {
    const bugBounty = await newBugBounty()
    const err = await asyncExpectErr(
      bugBounty.resolveClaim('rza', 1000, { from: accounts[1] })
    )
    expect(err).toBeDefined()
  })
})

async function newBugBounty () {
  const bugBounty = await tryAsync(
    BugBounty.new(500, 400, 300, 200, 100, 'rza', { from: accounts[0] })
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
