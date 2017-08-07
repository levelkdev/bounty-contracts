import _ from 'lodash'
import requireContract from './utils/requireContract'

const BugBounty = requireContract('BugBounty')

export default _.assign(
  _.assign({}, BugBounty),
  {
    new: async (
      payoutCritical,
      payoutHigh,
      payoutMedium,
      payoutLow,
      payoutNote,
      codeHash
    ) => {
      console.log('new BugBounty')
      const bugBounty = await BugBounty.new(
        payoutCritical,
        payoutHigh,
        payoutMedium,
        payoutLow,
        payoutNote,
        codeHash
      )
      console.log(`BugBounty created: ${bugBounty.address}`)
      return bugBounty
    }
  }
)
