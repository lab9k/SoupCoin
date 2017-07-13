const configuration = require('./config.json');

//change this when switching net
const config = configuration.rinkeby;

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(config.httpProvider));
const version = web3.version.api;

const rawTransaction = {
    buildCallback: function (err, data) {
        if (err) {
            console.log('Something went wrong: ' + err);
        } else {
            let json = JSON.parse(data).result;
            let jsonResult = JSON.parse(json);
            this.contract = web3.eth.contract(jsonResult);
            this.contractInstance = this.contract.at(config.contractAddress);

            const privateKey = new Buffer(config.privateKey, 'hex');
            let rawTx = {
                "nonce": this.getNonce(),
                "gasPrice": this.getGasPrice(),
                "gasLimit": this.getGasLimit(),
                "to": config.contractAddress,
                "value": this.getValue(),
                "data": this.getData(),
                "chainId": config.chainId
            };
            const Tx = require('ethereumjs-tx');

            let tx = new Tx(rawTx);
            tx.sign(privateKey);

            let serializedTx = tx.serialize();
            console.log("serialized transaction: ", serializedTx.toString('hex'));
            web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function (error, value) {
                if (error) {
                    console.err(error);
                }
                if (value) {
                    console.log(value);
                }
            });
        }

    },
    getNonce: function () {
       
    },
    getGasPrice: function () {

    },
    getGasLimit: function () {

    },
    getValue: function () {

    },
    getData: function () {

    },
    buildTransaction: function (url) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            let status = xhr.status;
            if (status === 200) {
                this.buildCallback(null, xhr.responseText);
            } else {
                this.buildCallback(status);
            }
        };
        xhr.send();
    }
};

const url = config.apiBaseUrl +
    "module=contract&action=getabi&address=" +
    config.contractAddress +
    "&apikey=" +
    config.apiKey;

rawTransaction.buildTransaction(url);