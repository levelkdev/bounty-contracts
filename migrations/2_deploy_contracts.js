var MetaCoin = artifacts.require("./BugBounty.sol");

module.exports = function(deployer) {
  deployer.deploy(BugBounty);
};
