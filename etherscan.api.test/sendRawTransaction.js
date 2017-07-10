const configuration = require('./sendRawConfig.json');

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
    getChainId: function () {

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