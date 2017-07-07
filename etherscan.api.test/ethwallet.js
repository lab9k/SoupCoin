const contractAddress = "0x19B3065F1b82f2c8f8DA8ed4577abB1E448eCEf3";
const apiKey = "JTI5CD7MSAIHYI53FXFXW7B9JXVJ15E36H";
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider());
const version = web3.version.api;
/*https://api.etherscan.io/api?module=contract&action=getabi&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=YourApiKeyToken*/
$.getJSON(`https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apiKey}`, function (data) {
    let contractABI = "";
    contractABI = JSON.parse(data.result);
    if (contractABI !== '') {
        const MyContract = web3.eth.contract(contractABI);
        const myContractInstance = MyContract.at(contractAddress);
        console.log(myContractInstance);
    } else {
        console.log("Error");
    }

});
