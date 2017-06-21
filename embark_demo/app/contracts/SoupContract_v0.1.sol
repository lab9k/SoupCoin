pragma solidity ^0.4.11;

import "SoupToken_v0.1.sol";
import "ContractOwned.sol";

contract SoupContract is ContractOwned{

	SoupToken public soupToken;

	function SoupContract(string name, string jaak) {

		soupToken = new SoupToken(name, jaak);
		owner = msg.sender;
	
	}

	function CreateAndTransfer(address target, uint256 mintedAmount) onlyAdminAndOwner {

		soupToken.mintToken(target, mintedAmount);

	}

	function GetTotalAmount() constant returns (uint256){

		return soupToken.totalSupply();
	
	}

}



