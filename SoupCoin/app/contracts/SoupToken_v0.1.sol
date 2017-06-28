pragma solidity ^0.4.11;

import "./Owned.sol";

contract SoupToken is Owned {
    /* Public variables of the token */
    string public standard = 'SoupToken 26/06';
    string public name;
    string public symbol;
    uint256 public totalSupply;

    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOf;

    mapping (uint => address[]) public ordersFor;

    uint public minBalanceForAccounts = 5 finney;


    /* Initializes contract with initial supply tokens to the creator of the contract */
    function SoupToken(string tokenName, string tokenSymbol) payable {
        owner = msg.sender;
        eigenaar = msg.sender;
        name = tokenName;                                   // Set the name for display purposes
        symbol = tokenSymbol;                               // Set the symbol for display purposes
    }

    function mintToken(address target, uint256 mintedAmount) onlyAdmin(msg.sender) {
        balanceOf[target] += mintedAmount;
        totalSupply += mintedAmount;
        Transfer(0, owner, mintedAmount);
        Transfer(owner, target, mintedAmount);
    }

    function transfer(address _to, uint256 _value) {
        if (_to == 0x0) throw;                               // Prevent transfer to 0x0 address. Use burn() instead
        if (balanceOf[msg.sender] < _value) throw;           // Check if the sender has enough
        if (balanceOf[_to] + _value < balanceOf[_to]) throw; // Check for overflows
        balanceOf[msg.sender] -= _value;                     // Subtract from the sender
        balanceOf[_to] += _value;                            // Add the same to the recipient        
        Transfer(msg.sender, _to, _value);                   // Notify anyone listening that this transfer took place
    }      

    function transferFrom(address _from, address _to, uint256 _value) onlyAdmin(msg.sender) returns (bool success) {
        if (_to == 0x0) throw;                                // Prevent transfer to 0x0 address. Use burn() instead
        if (balanceOf[_from] < _value) throw;                 // Check if the sender has enough
        if (balanceOf[_to] + _value < balanceOf[_to]) throw;  // Check for overflows
        balanceOf[_from] -= _value;                           // Subtract from the sender
        balanceOf[_to] += _value;                             // Add the same to the recipient
        Transfer(_from, _to, _value);
        return true;
    }

    function burnFrom(address _from, uint256 _value) onlyAdmin(msg.sender) returns (bool success) {
        if (balanceOf[_from] < _value) throw;                // Check if the sender has enough
        balanceOf[_from] -= _value;                          // Subtract from the sender
        totalSupply -= _value;                               // Updates totalSupply
        Burn(_from, _value);
        return true;
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

    function burnSoupTokensForDay(uint day) onlyAdmin(msg.sender) returns (bool) {

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

    function setMinBalance(uint minimumBalanceInFinney) onlyAdmin(msg.sender) {
         minBalanceForAccounts = minimumBalanceInFinney * 1 finney;
    }

    /* This generates a public event on the blockchain that will notify clients */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /* This notifies clients about the amount burnt */
    event Burn(address indexed from, uint256 value);

}