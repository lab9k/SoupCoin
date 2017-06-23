pragma solidity ^0.4.11;

import "SoupToken_v0.1.sol";
import "ContractOwned.sol";

contract SoupContract is ContractOwned {

	SoupToken public soupToken;
	uint public minBalanceForAccounts = 5 finney;

	function SoupContract(string name, string jaak) {

		soupToken = new SoupToken(name, jaak);
		owner = msg.sender;
	
	}

	function CreateAndTransferForAdmin(address target, uint256 mintedAmount) onlyAdmin{

		soupToken.mintToken(target, mintedAmount);
		if(target.balance<minBalanceForAccounts) target.transfer(minBalanceForAccounts-target.balance);

	}

	function setMinBalance(uint minimumBalanceInFinney) onlyAdmin {
         minBalanceForAccounts = minimumBalanceInFinney * 1 finney;
    }

	function GetTotalAmount() constant returns (uint256){

		return soupToken.totalSupply();
	
	}

	function checkBallanceOf(address user) constant returns (uint256) {
		return soupToken.balanceOf(user);
	}

	function burnFrom(address _from, uint256 _value) onlyAdmin returns (bool success){
        return soupToken.burnFrom(_from, _value);
    }

}



