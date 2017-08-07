/* global artifacts */

const BugBountyFactory = artifacts.require('./BugBountyFactory.sol')

module.exports = function (deployer) {
  deployer.deploy(BugBountyFactory)
}
