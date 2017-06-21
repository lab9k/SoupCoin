pragma solidity ^0.4.8;

Import "SoupToken_v0.1.sol";

contract SoupContract {

	SoupToken public soupToken;

	function SoupContract(){
		soupToken = new SoupToken();
	}

	function CreateAndTransfer(address target, uint256 mintedAmount) adminOnly{

		soupToken.mintToken(address target, uint256 mintedAmount);
		
	}

	// transfer (van, naar, hoeveel)



}