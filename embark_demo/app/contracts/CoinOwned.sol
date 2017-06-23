pragma solidity ^0.4.8;

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
        if (msg.sender != owner) throw;
        owner = newOwner;
    }
}