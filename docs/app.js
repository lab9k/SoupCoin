/**
 * Created by wim on 6/27/17.
 */


// globals
var dappInterface = [{
    "constant": false,
    "inputs": [{"name": "user", "type": "address"}],
    "name": "removeAdmin",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "", "type": "address"}],
    "name": "isAdmin",
    "outputs": [{"name": "", "type": "bool", "value": false}],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "user", "type": "address"}],
    "name": "checkBallanceOf",
    "outputs": [{"name": "", "type": "uint256", "value": "0"}],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "minBalanceForAccounts",
    "outputs": [{"name": "", "type": "uint256", "value": "5000000000000000"}],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "weekdays", "type": "uint256[]"}],
    "name": "orderForDays",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "dag", "type": "uint256"}],
    "name": "getOrderAddressenForDay",
    "outputs": [{"name": "", "type": "address[]", "value": []}],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "soupToken",
    "outputs": [{"name": "", "type": "address", "value": "0xaa555d93e43c1b3298e5f3b833f1bee9cbb7e182"}],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "user", "type": "address"}],
    "name": "addAdmin",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_from", "type": "address"}, {"name": "_value", "type": "uint256"}],
    "name": "burnFrom",
    "outputs": [{"name": "success", "type": "bool"}],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{"name": "", "type": "address", "value": "0xed451537fa5b9e7b07067cbb7bb369120f90d690"}],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "day", "type": "uint256"}],
    "name": "burnSoupTokensForDay",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "day", "type": "uint256"}],
    "name": "getAmountOrdersForDay",
    "outputs": [{"name": "", "type": "uint256", "value": "0"}],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "GetTotalAmount",
    "outputs": [{"name": "", "type": "uint256", "value": "100"}],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "target", "type": "address"}, {"name": "mintedAmount", "type": "uint256"}],
    "name": "CreateAndTransferForAdmin",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "minimumBalanceInFinney", "type": "uint256"}],
    "name": "setMinBalance",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}],
    "name": "ordersFor",
    "outputs": [{"name": "", "type": "address", "value": "0x"}],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "name", "type": "string"}, {"name": "jaak", "type": "string"}],
    "name": "setSoupToken",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "inputs": [{
        "name": "tokenName",
        "type": "string",
        "index": 0,
        "typeShort": "string",
        "bits": "",
        "displayName": "token Name",
        "template": "elements_input_string",
        "value": "SoupV1"
    }, {
        "name": "tokenSymbol",
        "type": "string",
        "index": 1,
        "typeShort": "string",
        "bits": "",
        "displayName": "token Symbol",
        "template": "elements_input_string",
        "value": "V1"
    }], "payable": true, "type": "constructor"
}];
var contractAddress = "0x77cAf7eC687D453B42FFaA76B3eAD5479F6826b5";


$(document).ready(function () {
    console.log("ready!");

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);
        console.log("it works!");
    }

    runApp();
});

function runApp() {

    var contract = web3.eth.contract(dappInterface).at(contractAddress);
    console.log(contract);


}