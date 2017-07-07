const contractAddress = "0x19b3065f1b82f2c8f8da8ed4577abb1e448ecef3";
const apiKey = "JTI5CD7MSAIHYI53FXFXW7B9JXVJ15E36H";
const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apiKey}`;
console.log(url);
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/zdscCHcH4o3fKBkwl8fH'));
const version = web3.version.api;
const lightwallet = require('eth-lightwallet');
const keystore = lightwallet.keystore;
const signing = lightwallet.signing;
const fs = require('fs');

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
        let json = JSON.parse(data).result;
        let jsonResult = JSON.parse(json);
        const myContract = web3.eth.contract(jsonResult);
        const myContractInstance = myContract.at("0x5ec718aB8c21fEc6948a157dE3A92543E7FCe7b4");

        let jsonKeystore = JSON.parse(fs.readFileSync('UTC--2017-07-03T10-01-33.485946316Z--1851180b772395fa017f926dc68e24028b1620ea', 'utf8'));
        console.log(jsonKeystore);
        keystore.deserialize(jsonKeystore);
    }
});