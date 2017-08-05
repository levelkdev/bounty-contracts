pragma solidity ^0.4.4;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

/// @title BugBounty - A basic bug bounty program
/// @author Chris Whinfrey
contract BugBounty is Ownable {

  /*
   *  Storage
   */
  // Payout for each level of bug severity Critical, High, Medium, Low, and Note
  uint public payoutCritical;
  uint public payoutHigh;
  uint public payoutMedium;
  uint public payoutLow;
  uint public payoutNote;
  // Hash of the code being reviewed
  bytes32 public codeHash;
  Claim[] public claims;

  struct Claim {
    address claimOwner;
    bytes32 claimHash;
  }

  /*
   *  Public functions
   */
  /// @dev Constructor sets the bug bounty program's parameters
  /// @param _payoutCritical Payout for a critical level bug
  /// @param _payoutHigh Payout for a high level bug
  /// @param _payoutMedium Payout for a medium level bug
  /// @param _payoutLow Payout for a low level bug
  /// @param _payoutNote Payout for a note level bug
  /// @param _codeHash A hash of the code relavant to the bounty
  function BugBounty(
    uint _payoutCritical,
    uint _payoutHigh,
    uint _payoutMedium,
    uint _payoutLow,
    uint _payoutNote,
    bytes32 _codeHash
  )
    public
  {
    payoutCritical = _payoutCritical;
    payoutHigh = _payoutHigh;
    payoutMedium = _payoutMedium;
    payoutLow = _payoutLow;
    payoutNote = _payoutNote;
    codeHash = _codeHash;
  }

  /// @dev File a claim by submitting a hash of the claim content
  /// @param claimHash A hash of the claim's content
  function fileClaim(bytes32 claimHash) {

  }

  /// @dev The bug bounty program owner can resolve a claim with a payout or 0
  /// if the claim is denied.
  /// @param claimHash Hash for the relavant claim
  /// @param resolutionHash Hash of the resolution content
  /// @param payout The payout for the claim
  function resolveClaim(bytes32 claimHash, bytes32 resolutionHash, uint payout) onlyOwner {

  }
}
