import _ from 'lodash'
import requireContract from './utils/requireContract'

const BugBounty = requireContract('BugBounty')

module.exports = _.assign(
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
      const bugBounty = await BugBounty.new(
        payoutCritical,
        payoutHigh,
        payoutMedium,
        payoutLow,
        payoutNote,
        codeHash
      )
      return bugBounty
    }
  }
)
