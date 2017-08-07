/* global artifacts */

const BugBounty = artifacts.require('./BugBounty.sol')

module.exports = function (deployer) {
  deployer.deploy(BugBounty)
}
