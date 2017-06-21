pragma solidity ^0.4.8;

import "SoupToken_v0.1.sol";

contract SoupContract is owned{

	SoupToken public soupToken;
	address public owner;

	function SoupContract(string name, string jaak) payable{

		soupToken = new SoupToken(name, jaak);
		owner = msg.sender;
	
	}

	function CreateAndTransfer(address target, uint256 mintedAmount) onlyAdminAndOwner payable{

		soupToken.mintToken(target, mintedAmount);

	}

	function GetTotalAmount() constant returns (uint256){

		soupToken.totalSupply();
	
	}



}



