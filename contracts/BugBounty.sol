pragma solidity ^0.4.4;

contract BugBounty {
  address owner;
  uint payoutCritical;
  uint payoutHigh;
  uint payoutMedium;
  uint payoutLow;
  uint payoutNote;
  bytes32 codeHash;

  modifier onlyOwner() {
    if (msg.sender == owner) _;
  }

  function BugBounty(uint _payoutCritical, uint _payoutHigh, uint _payoutMedium, uint _payoutLow, uint _payoutNote, bytes32 _codeHash) {
    owner = msg.sender;
    payoutCritical = _payoutCritical;
    payoutHigh = _payoutHigh;
    payoutMedium = _payoutMedium;
    payoutLow = _payoutLow;
    payoutNote = _payoutNote;
    codeHash = _codeHash;
  }

  function fileClaim(bytes32 _claimHash) {

  }

  function resolveClaim(bytes32 _claimHash, uint payout) onlyOwner {

  }
}
