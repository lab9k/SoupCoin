/**
 * Created by wim on 6/27/17.
 */


// globals
var dappInterface = [{
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{"name": "", "type": "string", "value": "SoupCoin 29/06"}],
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
    "outputs": [{"name": "", "type": "uint256", "value": "0"}],
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
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
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
    "payable": true,
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
    "inputs": [],
    "name": "symbol",
    "outputs": [{"name": "", "type": "string", "value": "🍏"}],
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
        "value": "SoupCoin 29/06"
    }, {
        "name": "tokenSymbol",
        "type": "string",
        "index": 1,
        "typeShort": "string",
        "bits": "",
        "displayName": "token Symbol",
        "template": "elements_input_string",
        "value": "🍏"
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
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "_from", "type": "address"}, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }],
    "name": "BurnFrom",
    "type": "event"
}];
const contractAddress = "0xAE827c9C4c15eD3098B30b72d4F63C6F2F9811Ec";


const contractEvents = {
    init: function () {
        this.soupContract = web3.eth.contract(dappInterface);
        this.contractInstance = this.soupContract.at(contractAddress);
        console.log(this.soupContract);
        console.log(this.contractInstance);

        this.basicInfoInit();
        this.isAdminInit();
        this.checkBalanceInit();
    },
    basicInfoInit: function () {
        $('#contractadres').append(this.contractInstance.address);
        this.contractInstance.name(function (error, value) {
            $('#contractnaam').append(value);
        });
        this.contractInstance.symbol(function (error, value) {
            $('#contractsymbool').append(value);
        });
        this.contractInstance.totalSupply(function (error, value) {
            $('#contractSupply').append(Number.parseInt(value));
        });
        this.contractInstance.owner(function (error, value) {
            $('#contractOwner').append(value);
        });
    },
    isAdminInit: function () {
        let account = web3.eth.accounts;
        $('#isAdmin').on('change keydown paste input', function () {
            contractEvents.isAdminChangeEvent()
        }).val(`${account}`);
        this.isAdminChangeEvent();
    },
    isAdminChangeEvent: function () {
        let tekst = $('#isAdmin').val();

        if (web3.isAddress(tekst)) {
            this.contractInstance.isAdmin(tekst, (e, b) => {
                $('.isAdminResult').html(`<b>${b}</b>`)
                    .removeClass("red")
                    .removeClass("green")
                    .addClass(b ? "green" : "red");
            });
        } else {
            $('.isAdminResult').html(`<b>Wrong address</b>`)
                .removeClass("green")
                .removeClass("red")
                .addClass("red");
        }
    },
    checkBalanceInit: function () {
        let account = web3.eth.accounts;
        $('#checkBalance').on('change keydown paste input', function () {
            contractEvents.checkBalanceChangeEvent();
        }).val(`${account}`);
        this.checkBalanceChangeEvent();
    },
    checkBalanceChangeEvent: function () {
        let account = $('#checkBalance').val();
        if (web3.isAddress(account)) {
            this.contractInstance.balanceOf(account, (error, result) => {
                $('.checkBalanceResult').html(`<b>${result}</b>`)

            });
        } else {
            $('.checkBalanceResult').html(`<b>Wrong address</b>`)

        }
    },

};
$(document).ready(function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    let pass = true;
    while (typeof web3 === 'undefined') {
        // Use Mist/MetaMask's provider
        if (pass) {
            window.web3 = new Web3(web3.currentProvider);
            pass = false;
        }
        setTimeout(function () {
            console.log('Web 3 has not been initialized, timing out for 1 sec');
        }, 1000);
    }
    //runApp();
    contractEvents.init();
});