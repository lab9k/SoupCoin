/**
 * Created by wim on 6/27/17.
 */


// globals
var dappInterface = [{
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{"name": "", "type": "string", "value": "Soupkesgvd"}],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "user", "type": "address"}],
    "name": "removeAdmin",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"name": "", "type": "uint256", "value": "21"}],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{"name": "success", "type": "bool"}],
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
    "inputs": [],
    "name": "standard",
    "outputs": [{"name": "", "type": "string", "value": "SoupToken 26/06"}],
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
    "constant": false,
    "inputs": [{"name": "user", "type": "address"}],
    "name": "addAdmin",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "", "type": "uint256", "value": "0"}],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "target", "type": "address"}, {"name": "mintedAmount", "type": "uint256"}],
    "name": "mintToken",
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
    "outputs": [{"name": "", "type": "address", "value": "0xf4ceaa1154d9d7ebe2d4e268aaec4e2e82e204a6"}],
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
    "inputs": [],
    "name": "symbol",
    "outputs": [{"name": "", "type": "string", "value": "GVD"}],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}],
    "name": "transfer",
    "outputs": [],
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
        "value": "Soupkesgvd"
    }, {
        "name": "tokenSymbol",
        "type": "string",
        "index": 1,
        "typeShort": "string",
        "bits": "",
        "displayName": "token Symbol",
        "template": "elements_input_string",
        "value": "GVD"
    }], "payable": true, "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "from", "type": "address"}, {
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {"indexed": false, "name": "value", "type": "uint256"}],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "from", "type": "address"}, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }],
    "name": "Burn",
    "type": "event"
}];
var contractAddress = "0x8D35EC00C85E714D23Fb39bD4d0088ef0368B4C4";


$(document).ready(function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);
    }
    runApp();
});

function runApp() {

    var contract = web3.eth.contract(dappInterface).at(contractAddress);
    console.log(contract);
    console.log(contract.address);

    $('#contractadres').html(contract.address);

}