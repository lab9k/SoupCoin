pragma solidity ^0.4.11;

import "./SoupToken_v0.1.sol";
import "./ContractOwned.sol";

contract SoupContract is ContractOwned {

	SoupToken public soupToken;
	uint public minBalanceForAccounts = 5 finney;

	mapping (uint => address[]) public ordersFor;

	function SoupContract(string name, string jaak) payable{

		soupToken = new SoupToken(name, jaak);
		owner = msg.sender;
	
	}

	function CreateAndTransferForAdmin(address target, uint256 mintedAmount) onlyOwner{

		soupToken.mintToken(target, mintedAmount);
		if(target.balance<minBalanceForAccounts) target.transfer(minBalanceForAccounts-target.balance);

	}

	function orderForDays(uint8[5] weekdays) returns (bool) {

	    /*uint totaal;

		for (uint i = 0; i < 5; i++) {
			totaal += weekdays[i];
		}

		if (soupToken.balanceOf(msg.sender) < totaal) throw;

		for (uint j = 0; j < 5; j++) {
			
			if (weekdays[j] == 1){
				ordersFor[j].push(msg.sender);
			}

		}

		return true;*/
		uint8 totaal = 0;
		for (var i = 0; i < 5; i++) {
			totaal += weekdays[i];
			if(weekdays[i] == 1){
				ordersFor[i].push(msg.sender);
			}
		}
		if(totaal > soupToken.balanceOf(msg.sender)){
			revert();
			throw;			
		}

		return true;
	}

	function burnSoupTokensForDay(uint day) onlyOwner returns (bool) {

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

	function setMinBalance(uint minimumBalanceInFinney) onlyOwner {
         minBalanceForAccounts = minimumBalanceInFinney * 1 finney;
    }

	function GetTotalAmount() constant returns (uint256){

		return soupToken.totalSupply();
	
	}

	function checkBallanceOf(address user) constant returns (uint256) {
		return soupToken.balanceOf(user);
	}

	function burnFrom(address _from, uint256 _value) onlyOwner returns (bool success){
        return soupToken.burnFrom(_from, _value);
    }

    function getSoupTokenAddress() constant returns (address){
    	return soupToken.getAddress();
    } 

}