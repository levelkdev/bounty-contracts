/* global test */

import BugBounty from 'BugBounty'

test('creating a new BugBounty', async (done) => {
  await tryAsync(
    BugBounty.new(500, 400, 300, 200, 100, 'rza')
  )
  done()
})

async function tryAsync (asyncFn) {
  try {
    await asyncFn
  } catch (err) {
    console.error(err)
  }
}
