const contractAddress = "0x19b3065f1b82f2c8f8da8ed4577abb1e448ecef3";
const apiKey = "JTI5CD7MSAIHYI53FXFXW7B9JXVJ15E36H";
const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apiKey}`;
console.log(url);
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/zdscCHcH4o3fKBkwl8fH'));
const version = web3.version.api;
const Tx = require('ethereumjs-tx');


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

        //TODO fill in private key (get from ignored file)
        const privateKey = new Buffer('3392d5b5d18ad0847bf7b2727fa12a92fd8bff1e7c0793b6895d310d5d1bfd24', 'hex');
        let rawTx = {
            "nonce": "0x13",
            "gasPrice": "0x0df8475800",
            "gasLimit": "0x0493e0",
            "to": "0x5ec718aB8c21fEc6948a157dE3A92543E7FCe7b4",
            "value": "0x00",
            "data": "0x79c65068000000000000000000000000ed451537fa5b9e7b07067cbb7bb369120f90d6900000000000000000000000000000000000000000000000000000000000000457",
            "chainId": 4
        };

        let tx = new Tx(rawTx);
        tx.sign(privateKey);

        let serializedTx = tx.serialize();
        console.log(serializedTx.toString('hex'));
        web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function (error, value) {
            if (error)
                console.error(error);
            if (value)
                console.log(value);
        });
    }
});