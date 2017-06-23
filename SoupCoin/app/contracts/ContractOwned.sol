pragma solidity ^0.4.11;

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



