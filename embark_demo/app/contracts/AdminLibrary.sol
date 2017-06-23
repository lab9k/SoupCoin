library AdminLibrary {

  function getProposalCount(address _storageContract) constant returns(uint256) 
  {
    return EternalStorage(_storageContract).getUIntValue(sha3("ProposalCount"));
  } 
	
  function addProposal(address _storageContract, bytes32 _name)
  {
    var idx = getProposalCount(_storageContract);
    EternalStorage(_storageContract).setBytes32Value(sha3("proposal_name", idx), _name);
    EternalStorage(_storageContract).setUIntValue(sha3("proposal_eth", idx), 0);
    EternalStorage(_storageContract).setUIntValue(sha3("ProposalCount"), idx + 1);
  }
}

contract EternalStorage{

  mapping(bytes32 => bool) BooleanStorage;

    function getBooleanValue(bytes32 record) constant returns (bool){
        return BooleanStorage[record];
    }

    function setBooleanValue(bytes32 record, bool value)
    {
        BooleanStorage[record] = value;
    }
}