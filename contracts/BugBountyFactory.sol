pragma solidity ^0.4.11;

import './BugBounty.sol';

/// @title BugBountyFactory
/// @dev Factory for creating new BugBounty contracts
contract BugBountyFactory {

  /*
   *  Events
   */
  event BugBountyCreated(
    address owner,
    BugBounty bugBounty,
    uint _payoutCritical,
    uint _payoutHigh,
    uint _payoutMedium,
    uint _payoutLow,
    uint _payoutNote,
    bytes _ipfsHash,
    bytes32 _codeHash
  );

  /*
   *  Public functions
   */
  /// @dev creates a new BugBounty contract
  /// @param _payoutCritical Payout for a critical level bug
  /// @param _payoutHigh Payout for a high level bug
  /// @param _payoutMedium Payout for a medium level bug
  /// @param _payoutLow Payout for a low level bug
  /// @param _payoutNote Payout for a note level bug
  /// @param _ipfsHash IPFS hash for off-chain metadata
  /// @param _codeHash A hash of the code relavant to the bounty
  function createBugBounty(
    uint _payoutCritical,
    uint _payoutHigh,
    uint _payoutMedium,
    uint _payoutLow,
    uint _payoutNote,
    bytes _ipfsHash,
    bytes32 _codeHash
  )
    public
    returns (BugBounty bugBounty)
  {
    bugBounty = new BugBounty(
      _payoutCritical,
      _payoutHigh,
      _payoutMedium,
      _payoutLow,
      _payoutNote,
      _ipfsHash,
      _codeHash
    );
    BugBountyCreated(
      msg.sender,
      bugBounty,
      _payoutCritical,
      _payoutHigh,
      _payoutMedium,
      _payoutLow,
      _payoutNote,
      _ipfsHash,
      _codeHash
    );
  }

}
