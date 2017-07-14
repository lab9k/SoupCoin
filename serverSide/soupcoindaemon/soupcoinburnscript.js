const Web3 = require('web3');
const Tx = require('ethereumjs-tx');
const config = require('./config.json').rinkeby;
const util = require('ethereumjs-util');
const privateKey = config.privatekey;
const web3 = new Web3(new Web3.providers.HttpProvider(config.provider));

let day = (new Date()).getDay();

console.log("burning soup for day number: ", day);

let argHex = (util.bufferToHex(util.setLengthLeft(day, 31)).replace("x", 0)).toString();
let txData = (config.burnSoupForDaySig + argHex);

console.log(`txData: ${txData}`);
web3.eth.defaultAccount = config.account;

const getNonce = () => {
    return new Promise((resolve, reject) => {
        web3.eth.getTransactionCount(web3.eth.defaultAccount, (error, result) => {
            if (error) reject(error);
            resolve(web3.toHex(result));
        });
    });
};

const getAmount = function () {
    return new Promise((resolve, reject) => {
        let myContract = web3.eth.contract(JSON.parse(config.contractAbi));
        let myContractInstance = myContract.at(config.contractaddress);
        let day = (new Date()).getDay();
        console.log("getting amount for day: ", day);

        myContractInstance.getOrderAddressesForDay(day, function (error, value) {
            if (error) reject(error);
            resolve(value);
        });
    });
};

const getGasPrice = () => {
    return new Promise((resolve, reject) => {
        web3.eth.getGasPrice((error, result) => {
            if (error) reject(error);
            resolve(web3.toHex(result.toNumber()));
        });
    });
};

const sendRawTransaction = (rawTx) => {
    const tx = new Tx(rawTx);
    const privateKeyBuffer = Buffer.from(privateKey, 'hex');
    tx.sign(privateKeyBuffer);
    const serializedTx = tx.serialize();
    web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function (err, hash) {
        console.log('Error:', err);
        console.log('Hash:', hash);
    });
};

const burn = function () {
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
};


const sendEmail = function (amount) {
    if (amount) {
        let exec = require('child_process').exec;
        exec('./SendMail.sh ' + amount, function (err, stdout, stderr) {
            console.log(stdout);
            console.log(err, stderr);
        });
    } else {
        Promise.all([getAmount()])
            .then(values => {
                console.log("values: ", values);
                let addresses = [];
                for (var i = 0; i < values[0].length; i++) {
                    if (values[0][i] !== "0x0000000000000000000000000000000000000000") {
                        addresses.push(values[0][i]);
                    }
                }
                console.error("addresses: ", addresses, addresses.length);
                if (addresses.length !== 0) {
                    sendEmail(addresses.length);
                    burn();
                }
            });
    }
};

sendEmail();