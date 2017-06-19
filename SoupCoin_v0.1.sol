pragma solidity ^0.4.11;

contract owned {
    address public owner;

    function owned() {
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

contract SoupCoin is owned{

    string public standard = 'SoupCoin 0.1';
    string public name;
    string public symbol;
    uint256 public totalSupply;
    
    struct user{
        uint256 balanceOf;
        role roleOf;
    }
    
    enum role { superadmin, admin, gebruiker }
    role constant defaultrole = role.gebruiker;
    
    mapping (address => user) public users;
    mapping (uint => address[]) orders;
    
    function SoupCoin(string tokenName,  string tokenSymbol) {
        users[msg.sender].roleOf = role.superadmin; 
        name = tokenName;                                   // Set the name for display purposes
        symbol = tokenSymbol;                            // Set the symbol for display purposes
    }
    
    function CreateAndTransfer(address target, uint256 Amount) { //enkel uit te voeren door admin of super admin
        
        if (users[msg.sender].roleOf != role.superadmin || users[msg.sender].roleOf != role.admin) throw; 
        if (target == 0x0) throw;
        users[target].balanceOf += Amount;
        if (users[target].roleOf != role.superadmin || users[target].roleOf != role.admin){
            users[target].roleOf != role.gebruiker;
        }
        totalSupply += Amount;
    }
    
    function MakeAdmin(address target) {
        
        if (users[msg.sender].roleOf != role.superadmin) throw;
        users[target].roleOf = role.admin;
        
    }
    
    function RemoveAdmin(address target) {
    
        if (users[msg.sender].roleOf != role.superadmin || users[msg.sender].roleOf != role.admin) throw; 
        
        if (users[target].roleOf != role.admin) throw;
        
        users[target].roleOf = role.gebruiker;
        
    }
    
    function ReservSoupForDay(address sender, uint[] WeekDays){
        
        if (users[sender].balanceOf < 1) throw;
        
        for (uint i = 0; i < WeekDays.length; i++){
            if (WeekDays[i] == 1){
                orders[WeekDays[i]].push(sender);
            }
        }
        
    }
    
    function CountSoupForDay(uint WeekDay) returns (uint) {
        return orders[WeekDay].length;
    }
    
    function EndOfDay(uint WeekDay) returns (bool success){
        
        for (uint i= 0; i < orders[WeekDay].length; i++){
            
            uint aantalSoupkes = users[orders[WeekDay][i]].balanceOf;
            users[orders[WeekDay][i]].balanceOf = aantalSoupkes-1;
        }
        
        return true;
    }
    
}