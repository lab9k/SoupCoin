pragma solidity ^0.4.11;

import "./Owned.sol";

contract SoupToken is Owned {
    /* Public variables of the token */
    string public standard = 'SoupToken 26/06';
    string public name;
    string public symbol;
    uint256 public totalSupply;
    address public eigenaar;

    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOf;

    
    /* Initializes contract with initial supply tokens to the creator of the contract */
    function SoupToken(string tokenName, string tokenSymbol){
        owner = msg.sender;
        eigenaar = msg.sender;
        name = tokenName;                                   // Set the name for display purposes
        symbol = tokenSymbol;                               // Set the symbol for display purposes
    }

    function mintToken(address target, uint256 mintedAmount) Owner {
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

    function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {
        if (_to == 0x0) throw;                                // Prevent transfer to 0x0 address. Use burn() instead
        if (balanceOf[_from] < _value) throw;                 // Check if the sender has enough
        if (balanceOf[_to] + _value < balanceOf[_to]) throw;  // Check for overflows
        balanceOf[_from] -= _value;                           // Subtract from the sender
        balanceOf[_to] += _value;                             // Add the same to the recipient
        Transfer(_from, _to, _value);
        return true;
    }

    function burnFrom(address _from, uint256 _value) Owner returns (bool success) {
        if (balanceOf[_from] < _value) throw;                // Check if the sender has enough
        balanceOf[_from] -= _value;                          // Subtract from the sender
        totalSupply -= _value;                               // Updates totalSupply
        Burn(_from, _value);
        return true;
    }

    /* This generates a public event on the blockchain that will notify clients */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /* This notifies clients about the amount burnt */
    event Burn(address indexed from, uint256 value);

}