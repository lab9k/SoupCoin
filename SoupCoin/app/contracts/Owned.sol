pragma solidity ^0.4.11;


contract Owned {

    address public owner;

    mapping (address => bool) public isAdmin;

    function Owned() {
        owner = msg.sender;
        isAdmin[msg.sender] = true;
    }

    modifier onlyOwner {
        if (msg.sender != owner) throw;
        _;
    }

    modifier onlyAdmin() {
        assert(isAdmin[msg.sender]);
        _;
    }

    function addAdmin(address user) onlyAdmin {
        isAdmin[user] = true;
    }

    function removeAdmin(address user) onlyAdmin {
        if (user == owner) {
            throw;
            //cant remove the owner
        }
        isAdmin[user] = false;
    }

    function transferOwnership(address newOwner) onlyOwner {
        owner = newOwner;
    }


}