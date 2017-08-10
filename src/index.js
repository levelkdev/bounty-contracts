var BugBounty = require('./BugBounty')
var BugBountyFactory = require('./BugBountyFactory')

module.exports = (opts) => {
  return {
    BugBounty: BugBounty(opts),
    BugBountyFactory: BugBountyFactory(opts)
  }
}
