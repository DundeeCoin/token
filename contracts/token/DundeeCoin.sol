pragma solidity ^0.4.11;


import "./MintableToken.sol";


/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator. 
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `StandardToken` functions.
 */
contract SimpleToken is MintableToken {

  string public name = "Dundee Coin";
  string public symbol = "DDC";
  uint256 public decimals = 18;
  uint256 public INITIAL_SUPPLY = 50000000000000000000000000;

  /**
   * @dev Contructor that gives msg.sender all of existing tokens. 
   */
  function SimpleToken() {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}

