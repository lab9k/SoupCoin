pragma solidity ^0.4.11;

import "./SoupToken_v0.1.sol";
import "./Owned.sol";

contract SoupContract is Owned {

	SoupToken public soupToken;
	uint public minBalanceForAccounts = 5 finney;

	mapping (uint => address[]) public ordersFor;

	function SoupContract(string tokenName,string tokenSymbol) payable{
		soupToken = new SoupToken(tokenName,tokenSymbol);
		owner = msg.sender;
	
	}

	function setSoupToken(string name, string jaak) Owner {
		soupToken = new SoupToken(name, jaak);
	}

	function CreateAndTransferForAdmin(address target, uint256 mintedAmount) onlyAdmin(msg.sender) {

		soupToken.mintToken(target, mintedAmount);
		if(target.balance<minBalanceForAccounts) target.transfer(minBalanceForAccounts-target.balance);

	}

	function orderForDays(uint[] weekdays) returns (bool) {

		uint totaal;

		for (uint i = 0; i < 5; i++) {
			totaal += weekdays[i];
		}

		if (soupToken.balanceOf(msg.sender) < totaal) throw;

		for (uint j = 0; j < 5; j++) {
			
			if (weekdays[j] == 1){
				ordersFor[j].push(msg.sender);
			}

		}

		return true;

	}

	function burnSoupTokensForDay(uint day) Owner returns (bool) {

		for (uint i =0; i < ordersFor[day].length; i++) {
			burnFrom(ordersFor[day][i], 1);
		}

		

		return true;
	}

	function getOrderAddressenForDay(uint dag) constant returns (address[]) {
		return ordersFor[dag];
	}

	function getAmountOrdersForDay(uint day) constant returns (uint){
		return ordersFor[day].length;
	}

	function setMinBalance(uint minimumBalanceInFinney) Owner {
         minBalanceForAccounts = minimumBalanceInFinney * 1 finney;
    }

	function GetTotalAmount() constant returns (uint256){

		return soupToken.totalSupply();
	
	}

	function checkBallanceOf(address user) constant returns (uint256) {
		return soupToken.balanceOf(user);
	}

	function burnFrom(address _from, uint256 _value) Owner returns (bool success){
        return soupToken.burnFrom(_from, _value);
    }

}