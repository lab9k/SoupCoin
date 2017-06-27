pragma solidity 0.4.11;

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
        assert (isAdmin[user]);
            _;
    }

    function addAdmin(address user) Owner{
        isAdmin[user] = true;
    }

    function removeAdmin(address user) Owner {
        isAdmin[user] = false;
    }

    function transferOwnership(address newOwner) {
        owner = newOwner;
    }


}