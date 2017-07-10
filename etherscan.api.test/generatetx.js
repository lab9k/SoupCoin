/**
 * Created by wim on 10/07/17.
 */


const Web3 = require('web3');
const Tx = require('ethereumjs-tx');
const config = require('./config.json');
const util = require('ethereumjs-util');
const privateKey = config.privatekey;
const web3 = new Web3(new Web3.providers.HttpProvider(config.provider)); //link provided by Infura.io

let addr;
let soupAmount;

process.argv.forEach(function (val, index, array) {
    if (index === 2) {
        addr = val;
    }
    if (index === 3) {
        soupAmount = parseInt(val);
    }
    console.log(index + ': ' + val);
});

function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}
let dataAddr = (util.bufferToHex(util.setLengthLeft(addr, 31)).replace("x", 0)).toString();
let dataArgs = (util.bufferToHex(util.setLengthLeft(soupAmount, 31)).replace("x", 0)).toString();
let txData = (config.mintTokenSig + dataAddr + dataArgs);

console.log(txData);
web3.eth.defaultAccount = config.account;

const getNonce = () => {
    return new Promise((resolve, reject) => {
        web3.eth.getTransactionCount(web3.eth.defaultAccount, (error, result) => {
            if (error) reject(error);
            resolve(web3.toHex(result));
        })
    })
}
const getGasPrice = () => {
    return new Promise((resolve, reject) => {
        web3.eth.getGasPrice((error, result) => {
            if (error) reject(error);
            resolve(web3.toHex(result.toNumber()));
        })
    })
}

const sendRawTransaction = (rawTx) => {
    const tx = new Tx(rawTx);
    const privateKeyBuffer = Buffer.from(privateKey, 'hex');
    tx.sign(privateKeyBuffer);
    const serializedTx = tx.serialize();
    web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function (err, hash) {
        console.log('Error:', err);
        console.log('Hash:', hash);
    });
}

Promise.all([getNonce(), getGasPrice()])
    .then(values => {
        const rawTx = {
            "to": config.contractaddress.toString(),
            "gasLimit": web3.toHex(300000),
            "value": "0x00",
            "nonce": values[0],
            "gasPrice": values[1],
            "data": txData,
            "chainId": 4
        };


        console.log(rawTx);
        return (rawTx);
    })
    .then(sendRawTransaction)
    .catch(e => console.log(e));
