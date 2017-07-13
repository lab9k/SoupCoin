const Web3 = require('web3');
const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;
const {
    window
} = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jquery')(window);
var web3 = new Web3(new Web3.providers.HttpProvider());
var version = web3.version.api;

$.getJSON('https://api.etherscan.io/api?module=contract&action=getabi&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=GHY5SNCTC2ARBCCTX4XMCQ8VSHRZQSYJXY', function (data) {
    var contractABI = "";
    contractABI = JSON.parse(data.result);
    if (contractABI != '') {
        var MyContract = web3.eth.contract(contractABI);
        var myContractInstance = MyContract.at("0x19B3065F1b82f2c8f8DA8ed4577abB1E448eCEf3");
        var result;
        myContractInstance.totalSupply(function (error, value) {
            if (error) {
                result = error;
            } else {
                result = value;
            }
        });
        console.log("result1 : " + result);
        var result = myContractInstance.totalSupply(function (error, value) {
            if (error) {
            } else {
            }
        });
        console.log("result2 : " + result);
    } else {
        console.log("Error");
    }
});