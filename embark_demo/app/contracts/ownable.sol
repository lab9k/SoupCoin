pragma solidity ^0.4.10;


contract Ownable {

   mapping (uint => address) public admins;

   address public owner;

   uint public adminCount;

   function Ownable() {
        owner = msg.sender;
        adminCount = 0;
    }

   function getOwner() constant returns (address){
        return owner;
    }

   function getSender() returns (address){
        return msg.sender;
    }

   function addAdmin(address o) onlyOwner {
        admins[adminCount] = o;
        adminCount++;
    }

   function isOwner(address o) private returns (bool){
        for (uint i = 0; i < adminCount; i++) {
            if (o == admins[i]) {
                return true;
            }
        }
        return false;
    }

   modifier onlyOwner {
        if (msg.sender != owner) throw;
        _;
    }
}