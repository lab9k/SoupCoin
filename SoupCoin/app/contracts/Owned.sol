pragma solidity ^0.4.11;


contract Owned {

    address public owner;
    mapping (address => bool) public isAdmin;

    function Owned() {
        owner = msg.sender;
        isAdmin[msg.sender] = true;
    }

    modifier Owner {
        if (msg.sender != owner) throw;
        _;
    }

    modifier onlyAdmin(address user) {
        assert(isAdmin[user]);
        _;
    }

    function addAdmin(address user) onlyAdmin(msg.sender) {
        isAdmin[user] = true;
    }

    function removeAdmin(address user) onlyAdmin(msg.sender) {
        if (user == owner) {
            throw;
        }
        isAdmin[user] = false;
    }

    function transferOwnership(address newOwner) {
        owner = newOwner;
    }


}