pragma solidity ^0.4.8;

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

    string public standard = 'SoupCoin V0.1';
    string public name;
    string public symbol;
    uint256 public totalSupply;
    uint minBalanceForAccounts = 5 finney;
    
    mapping (address => uint) public balanceOf;
    mapping (uint => address[]) public orders;
    mapping (address => bool) public isAdmin;
    
    function SoupCoin(string tokenName, string tokenSymbol) {
        isAdmin[msg.sender] = true; 
        name = tokenName;                                   // Set the name for display purposes
        symbol = tokenSymbol;                            // Set the symbol for display purposes
    }


    function SetMinBalance(uint minimumBalanceInFinney) onlyOwner {
         minBalanceForAccounts = minimumBalanceInFinney * 1 finney;
    }

    
    function CreateAndTransfer(address target, uint256 Amount) { //enkel uit te voeren door admin of super admin
        
        if (!isAdmin[msg.sender]) throw; 
        if (target == 0x0) throw;

        balanceOf[target] += Amount;

        if (!isAdmin[target]){
            isAdmin[target] = false;
        }

        if(target.balance<minBalanceForAccounts) {

	    	if(target.send(minBalanceForAccounts-target.balance)){
	    		throw;
	    	}
        }
        
        totalSupply += Amount;
    
    }

    
    function MakeAdmin(address target) returns (bool){

        if (!isAdmin[msg.sender]) throw;

        isAdmin[target] = true;

        return true;
        
    }
    
    function RemoveAdmin(address target) returns (bool){
    
        if (!isAdmin[msg.sender]) throw;
        
        if (isAdmin[target] != true) throw;
        
        isAdmin[target] = false;

        return true;
        
    }
    
    function ReservSoupForDay(address sender, uint[] WeekDays){

        uint aantalsoup = 0;

        for (uint j = 0; j< WeekDays.length; j++){
            aantalsoup += WeekDays[j];
        }
        
        if (balanceOf[sender] < aantalsoup) throw;
        
        for (uint i = 0; i < WeekDays.length; i++){
            if (WeekDays[i] == 1){
                orders[WeekDays[i]].push(sender);
            }
        }
        
    }
    
    function CountSoupForDay(uint WeekDay) returns (uint) {

        return orders[WeekDay].length;
    
    }
    
    function EndOfDay(uint WeekDay) returns (bool){
        
        for (uint i= 0; i < orders[WeekDay].length; i++){
            
            balanceOf[orders[WeekDay][i]] = balanceOf[orders[WeekDay][i]]-1;
           
        }
        
        for (uint j = 0; j < orders[WeekDay].length; j++){

            delete orders[WeekDay][j];

        }
        
        return true;
    }

    function getRole(address sender) returns (bool){
    	return isAdmin[sender];
    }
    
}







