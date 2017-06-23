pragma solidity ^0.4.11;

contract CoinOwned {
    address public owner;

    function CoinOwned() {

        owner = msg.sender;

    }

    modifier onlyOwner {
        if (msg.sender != owner) throw;
        _;
    }

    function transferOwnership(address newOwner) {
        owner = newOwner;
    }
}

contract SoupToken is CoinOwned{
    /* Public variables of the token */
    string public standard = 'SoupToken 0.1';
    string public name;
    string public symbol;
    uint256 public totalSupply;
    address public eigenaar;

    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOf;

    /* This generates a public event on the blockchain that will notify clients */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /* This notifies clients about the amount burnt */
    event Burn(address indexed from, uint256 value);

    /* Initializes contract with initial supply tokens to the creator of the contract */
    function SoupToken(string tokenName, string tokenSymbol){
        owner = msg.sender;
        eigenaar = msg.sender;
        name = tokenName;                                   // Set the name for display purposes
        symbol = tokenSymbol;                               // Set the symbol for display purposes
    }

    function mintToken(address target, uint256 mintedAmount) onlyOwner {
        balanceOf[target] += mintedAmount;
        totalSupply += mintedAmount;
        Transfer(0, owner, mintedAmount);
        Transfer(owner, target, mintedAmount);
    }

    function transfer(address _to, uint256 _value) payable{
        if (_to == 0x0) throw;                               // Prevent transfer to 0x0 address. Use burn() instead
        if (balanceOf[msg.sender] < _value) throw;           // Check if the sender has enough
        if (balanceOf[_to] + _value < balanceOf[_to]) throw; // Check for overflows
        balanceOf[msg.sender] -= _value;                     // Subtract from the sender
        balanceOf[_to] += _value;                            // Add the same to the recipient        
        Transfer(msg.sender, _to, _value);                   // Notify anyone listening that this transfer took place
    }      

    function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {
        if (_to == 0x0) throw;                                // Prevent transfer to 0x0 address. Use burn() instead
        if (balanceOf[_from] < _value) throw;                 // Check if the sender has enough
        if (balanceOf[_to] + _value < balanceOf[_to]) throw;  // Check for overflows
        balanceOf[_from] -= _value;                           // Subtract from the sender
        balanceOf[_to] += _value;                             // Add the same to the recipient
        Transfer(_from, _to, _value);
        return true;
    }

    function burn(uint256 _value) returns (bool success) {
        if (balanceOf[msg.sender] < _value) throw;            // Check if the sender has enough
        balanceOf[msg.sender] -= _value;                      // Subtract from the sender
        totalSupply -= _value;                                // Updates totalSupply
        Burn(msg.sender, _value);
        return true;
    }

    function burnFrom(address _from, uint256 _value) onlyOwner returns (bool success) {
        if (balanceOf[_from] < _value) throw;                // Check if the sender has enough
        balanceOf[_from] -= _value;                          // Subtract from the sender
        totalSupply -= _value;                               // Updates totalSupply
        Burn(_from, _value);
        return true;
    }

    function getAddress() returns (address){
        return this;
    }

}

contract ContractOwned {
    address public owner;

    function ContractOwned() {

        owner = msg.sender;

    }

    modifier onlyOwner {
        if (msg.sender != owner) throw;
        _;
    }

    function transferOwnership(address newOwner) onlyOwner {
        
        owner = newOwner;
    }
}

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