pragma solidity ^0.4.11;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

/// @title BugBounty - A basic bug bounty program
/// @author Chris Whinfrey
contract BugBounty is Ownable {
  /*
   *  Constants
   */
  bytes32 constant BYTES32_NULL = 0;

  /*
   *  Events
   */
  // TODO: Can an event contain a Claim struct?
  event ClaimFiled(
    address claimOwner,
    bytes32 claimHash
  );
  event ClaimResolved(
    address claimOwner,
    bytes32 claimHash,
    bytes32 resolutionHash,
    uint payout
  );

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
  mapping (bytes32 => Claim) public claims;
  // TODO: Add claimCount that tracks number of claims in mapping
  // uint public claimCount;
  // TODO: Add unresolvedClaimCount that tracks number of unresolved claims in mapping
  // uint public unresolvedClaimCount;

  struct Claim {
    address claimOwner;
    bytes32 claimHash;
    bytes32 resolutionHash;
    bool isResolved;
    bool isClaim;
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
    payable
  {
    payoutCritical = _payoutCritical;
    payoutHigh = _payoutHigh;
    payoutMedium = _payoutMedium;
    payoutLow = _payoutLow;
    payoutNote = _payoutNote;
    codeHash = _codeHash;
  }

  /// @dev Check if claim exists
  /// @dev The pattern for checking if a struct exists in a mapping comes from
  /// https://ethereum.meta.stackexchange.com/questions/443/blog-simple-storage-patterns-in-solidity
  /// @param claimHash A hash of the claim's content
  function isClaim(bytes32 claimHash) public constant returns(bool isClaim) {
    return claims[claimHash].isClaim;
  }

  /// @dev Check if claim is resolved
  /// @param claimHash A hash of the claim's content
  function isResolved(bytes32 claimHash) public constant returns(bool isResolved) {
    return claims[claimHash].isResolved;
  }

  /// @dev File a claim by submitting a hash of the claim content
  /// @param claimHash A hash of the claim's content
  function fileClaim(bytes32 claimHash) {
    require(!isClaim(claimHash));
    claims[claimHash] = Claim(msg.sender, claimHash, BYTES32_NULL, false, true);
    ClaimFiled(msg.sender, claimHash);
  }

  /// @dev The bug bounty program owner can resolve a claim with a payout or 0
  /// if the claim is denied.
  /// @param claimHash Hash for the relavant claim
  /// @param resolutionHash Hash of the resolution content
  /// @param payout The payout for the claim
  function resolveClaim(bytes32 claimHash, bytes32 resolutionHash, uint payout) onlyOwner {
    require(isClaim(claimHash));
    Claim claim = claims[claimHash];
    claim.resolutionHash = resolutionHash;
    // TODO: Check for sufficient funds or is it fine to let the contract fail on it's own?
    claim.claimOwner.transfer(payout);
    /*claim.isResolved = true;*/
  }
}
