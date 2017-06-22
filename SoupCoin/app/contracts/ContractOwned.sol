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

    modifier onlyAdminAndOwner {
        if (msg.sender != owner || !isAdmin[msg.sender]) throw;
        _;
    }

    function addAdmin(address admin) {
        isAdmin[admin] = true;
    }

    function removeAdmin(address admin) {
        if (admin == owner) throw; 
        isAdmin[admin] = false;
    }

    function transferOwnership(address newOwner) {
        owner = newOwner;
    }
}


