import _ from 'lodash'
import requireContract from './utils/requireContract'

export default requireContract('BugBounty')

/*
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
      const BugBounty = await BugBounty.new(
        payoutCritical,
        payoutHigh,
        payoutMedium,
        payoutLow,
        payoutNote,
        codeHash
      )
      console.log(`BugBounty created: ${BugBounty.address}`)
      return BugBounty
    }
  }
) */
