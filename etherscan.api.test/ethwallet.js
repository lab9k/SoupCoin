const contractAddress = "0x19B3065F1b82f2c8f8DA8ed4577abB1E448eCEf3";
const apiKey = "JTI5CD7MSAIHYI53FXFXW7B9JXVJ15E36H";
const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apiKey}`;
console.log(url);
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider());
const version = web3.version.api;

const getJSON = function (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        let status = xhr.status;
        if (status === 200) {
            callback(null, xhr.responseText);
        } else {
            callback(status);
        }
    };
    xhr.send();
};
getJSON(url, function (err, data) {
    if (err !== null) {
        console.log('Something went wrong: ' + err);
    } else {
        //console.log(data, "\ntypeof data: ", typeof data);
        let json = JSON.parse(data).result;
        let jsonResult = JSON.parse(json);
        const myContract = web3.eth.contract(jsonResult);
        const myContractInstance = myContract.at(contractAddress);
        console.log(myContractInstance);
    }
});