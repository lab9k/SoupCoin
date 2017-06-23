contract adminStorage{

  mapping(bytes32 => bool) adminStorage;

    function getBooleanValue(bytes32 record) constant returns (bool){
        return BooleanStorage[record];
    }

    function setBooleanValue(bytes32 record, bool value)
    {
        BooleanStorage[record] = value;
    }

}

