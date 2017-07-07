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
        const privateKey = new Buffer('< private Key here >', 'hex');

        let rawTx = {
            nonce: '0x00',
            gasPrice: '0x09184e72a000',
            gasLimit: '0x2710',
            to: '0x0000000000000000000000000000000000000000',
            value: '0x00',
            data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
        }

        let tx = new Tx(rawTx);
        tx.sign(privateKey)

        let serializedTx = tx.serialize();
        console.log(serializedTx.toString('hex'));
    }
});