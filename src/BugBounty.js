import _ from 'lodash'
import requireContract from './requireContract'

module.exports = (opts) => {
  const BugBounty = requireContract('BugBounty', opts)

  return _.assign(
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
}
