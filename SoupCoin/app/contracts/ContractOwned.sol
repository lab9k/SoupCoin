pragma solidity ^0.4.11;

contract ContractOwned {
    address public owner;
    mapping (address => bool) public isAdmin;

    function ContractOwned() {

        owner = msg.sender;
        isAdmin[msg.sender] = true;

    }

    modifier onlyOwner {
        if (msg.sender != owner) throw;
        _;
    }

    modifier onlyAdmin {
        if (!isAdmin[msg.sender]) throw;
        _;
    }

    function addAdmin(address admin) {
        if (msg.sender != owner || !isAdmin[msg.sender]) throw;
        isAdmin[admin] = true;
    }

    function removeAdmin(address admin) {
        if (!isAdmin[msg.sender]) throw;
        if (admin == owner) throw; 
        isAdmin[admin] = false;
    }

    function transferOwnership(address newOwner) {
        if (!isAdmin[msg.sender]) throw;
        owner = newOwner;
    }
}


