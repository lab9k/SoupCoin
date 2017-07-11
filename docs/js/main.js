/**
 * Created by wim on 6/27/17.
 */


// globals
const dappInterface = [{
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{"name": "", "type": "string", "value": "SoupCoin"}],
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
    "outputs": [{"name": "", "type": "bool", "value": true}],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "day", "type": "uint256"}],
    "name": "getOrderAddressesForDay",
    "outputs": [{"name": "", "type": "address[]", "value": []}],
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
    "inputs": [{"name": "weekdays", "type": "bool[]"}],
    "name": "orderForDays",
    "outputs": [{"name": "success", "type": "bool"}],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "standard",
    "outputs": [{"name": "", "type": "string", "value": "SoupToken 30/06"}],
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
    "outputs": [{"name": "", "type": "address", "value": "0x1851180b772395fa017f926dc68e24028b1620ea"}],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "day", "type": "uint256"}],
    "name": "burnSoupTokensForDay",
    "outputs": [{"name": "success", "type": "bool"}],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{"name": "", "type": "string", "value": "🍜"}],
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
        "value": "SoupCoin"
    }, {
        "name": "tokenSymbol",
        "type": "string",
        "index": 1,
        "typeShort": "string",
        "bits": "",
        "displayName": "token Symbol",
        "template": "elements_input_string",
        "value": "🍜"
    }], "payable": true, "type": "constructor"
}, {"payable": true, "type": "fallback"}, {
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
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "sender", "type": "address"}],
    "name": "LogDepositReceived",
    "type": "event"
}];
const contractAddress = "0x5ec718aB8c21fEc6948a157dE3A92543E7FCe7b4";

window.addEventListener('load', function () {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!');
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    }

    setTimeout(function () {
        $(".loading-screen").addClass("invisible");
    }, 5000);

    // Now you can start your app & access web3 freely:
    contractEvents.init();
});
const contractEvents = {
    init: function () {
        this.soupContract = web3.eth.contract(dappInterface);
        this.contractInstance = this.soupContract.at(contractAddress);
        console.log(this.soupContract);
        console.log(this.contractInstance);

        this.basicInfoInit();
        this.isAdminInit();
        this.checkBalanceInit();
        this.mintTokenInit();
        this.transferTokenInit();
        this.addAdminInit();
        this.removeAdminInit();
        this.transferOwnershipInit();
        this.orderSoupForDaysInit();
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
        this.contractInstance.balanceOf(web3.eth.defaultAccount, function (error, result) {
            $('#balansLabel').append(result ? result.toString() : "/");
        });
        $('#accountLabel').append(web3.eth.defaultAccount);
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
    mintTokenInit: function () {
        $('#mintTokenBtn').on('click', function (event) {
            let amount = Number.parseInt($('#mintTokenAmount').val());
            let address = $('#mintTokenAdress').val();
            contractEvents.mintTokenTransaction(address, amount);
        });
    },
    mintTokenTransaction: function (address, amount) {
        console.log(`address: ${address} and type: ${typeof address}\namount: ${amount} and type: ${typeof amount}`);
        this.contractInstance.mintToken(address, amount, function (error, transaction) {
            console.log(error, transaction);
            if (error) {
                $('.mintTokenResult').html(`<p>Something went wrong: ${error}</p>`)
                    .removeClass("red")
                    .removeClass("green")
                    .addClass("red");
            } else {
                $('.mintTokenResult').html(`<a href="https://rinkeby.etherscan.io/tx/${transaction}" target="_blank">${transaction}</a>`)
                    .removeClass("red")
                    .removeClass("green")
                    .addClass("green");
            }
        })
    },
    transferTokenInit: function () {
        $('#transferTokenBtn').on('click', function (event) {
            let amount = Number.parseInt($('#transferTokenAmount').val());
            let address = $('#transferTokenAdress').val();
            contractEvents.transferTokenTransaction(address, amount);
        });
    },
    transferTokenTransaction(address, amount){
        console.log(`address: ${address} and type: ${typeof address}\namount: ${amount} and type: ${typeof amount}`);
        this.contractInstance.transfer(address, amount, function (error, transaction) {
            console.log(error, transaction);
            if (error) {
                $('.transferTokenResult').html(`<p>Something went wrong: ${error}</p>`)
                    .removeClass("red")
                    .removeClass("green")
                    .addClass("red");
            } else {
                $('.transferTokenResult').html(`<a href="https://rinkeby.etherscan.io/tx/${transaction}" target="_blank">${transaction}</a>`)
                    .removeClass("red")
                    .removeClass("green")
                    .addClass("green");
            }
        });
    },
    addAdminInit: function () {
        $('#addAdminBtn').on('click', function (event) {
            let address = $('#addAdmin').val();
            contractEvents.addAdmin(address);
        });
    },
    addAdmin: function (address) {
        console.log(`address: ${address} and type: ${typeof address}`);
        this.contractInstance.addAdmin(address, function (error, value) {
            console.log(error, value);
            if (error) {
                $('.addAdminResult').html(`<p>Something went wrong!: ${error}</p>`)
                    .removeClass("red")
                    .removeClass("green")
                    .addClass("red");
            } else {
                $('.addAdminResult').html(`<a href="https://rinkeby.etherscan.io/tx/${value}" target="_blank">${value}</a>`)
                    .removeClass("red")
                    .removeClass("green")
                    .addClass("green");
            }
        });
    },
    removeAdminInit: function () {
        $('#removeAdminBtn').on('click', function () {
            let address = $('#removeAdmin').val();
            contractEvents.removeAdmin(address);
        });
    },
    removeAdmin: function (address) {
        console.log(`address: ${address} and type: ${typeof address}`);
        this.contractInstance.removeAdmin(address, function (error, value) {
            console.log(error, value);
            if (error) {
                $('.removeAdminResult').html(`<p>Something went wrong!: ${error}</p>`)
                    .removeClass("red")
                    .removeClass("green")
                    .addClass("red");
            } else {
                $('.removeAdminResult').html(`<a href="https://rinkeby.etherscan.io/tx/${value}" target="_blank">${value}</a>`)
                    .removeClass("red")
                    .removeClass("green")
                    .addClass("green");
            }
        });
    },
    transferOwnershipInit: function () {
        $('#transferOwnershipBtn').on('click', function () {
            let address = $('#transferOwnership').val();
            contractEvents.transferOwnership(address);
        });
    },
    transferOwnership: function (address) {
        console.log(`address: ${address} and type: ${typeof address}`);
        this.contractInstance.transferOwnership(address, function (error, value) {
            console.log(error, value);
            if (error) {
                $('.transferOwnershipResult').html(`<p>Something went wrong!: ${error}</p>`)
                    .removeClass("red")
                    .removeClass("green")
                    .addClass("red");
            } else {
                $('.transferOwnershipResult').html(`<a href="https://etherscan.io/tx/${value}" target="_blank">${value}</a>`)
                    .removeClass("red")
                    .removeClass("green")
                    .addClass("green");
            }
        })
    },

    orderSoupForDaysInit: function () {

        let dagen = {};
        dagen[0] = "Maandag";
        dagen[1] = "Dinsdag";
        dagen[2] = "Woensdag";
        dagen[3] = "Donderdag";
        dagen[4] = "Vrijdag";

        let datum = new Date();
        $('#dayLabel').append(datum);
        let huidigeDag = datum.getDay();
        if (huidigeDag > 4) {
            huidigeDag = -1;
        }

        function checkIfOrdered(arr) {
            if (arr === null) {
                return false;
            }
            for (let j = 0; j < arr.length; j++) {
                if (web3.eth.defaultAccount === arr[j]) {
                    return true;
                }
            }
            return false;
        }


        for (let i = 0; i < 5; i++) {

            // create & append elements to DOM
            let checkboxdiv = $(document.createElement("div"));
            let checkboxinput = $(document.createElement("input"));
            $(checkboxinput).attr("type", "checkbox");
            $(checkboxdiv).append(checkboxinput);
            $(checkboxdiv).addClass("ui");
            $(checkboxdiv).addClass("checkbox");
            var label = $(document.createElement("label"));
            label.html((dagen[i]));
            $(checkboxdiv).append(label);
            $(".dagenCheckboxGroup").append(checkboxdiv)
                .append("<br />");

            //check if user already ordered, if so check the checkbox.
            contractEvents.contractInstance.getOrderAddressesForDay(i, function (error, success) {
                if (checkIfOrdered(success)) {
                    $(checkboxdiv).addClass("checked");
                    $(checkboxinput).attr("checked", "checked");
                }
            });

            // disable the checkbox if day has already passed, user cant change his mind anymore.

            if (i < huidigeDag) {
                $(checkboxdiv).addClass("disabled");
                $(checkboxinput).attr("disabled", "disabled");

            }
        }
        function composeOrderArray() {
            var arr = [];
            $(".dagenCheckboxGroup").children().each(function (index, value) {
                if ($(value).hasClass("checkbox")) {
                    $(value).children().each(function (index, value) {
                        if ($(value).is(':checkbox')) {
                            if ($(value).is(':checked')) {
                                arr.splice(index, 0, true);
                            }
                            else {
                                arr.splice(index, 0, false);
                            }
                        }
                    });
                }
            });
            return arr.reverse();
        }

        // handle click on button
        $("#bevestigOrderBtn").off().on("click", function (event) {
            contractEvents.orderSoupForDaysTransaction(composeOrderArray());
        })
    },

    orderSoupForDaysTransaction: function (orders) {

        contractEvents.contractInstance.orderForDays(orders, function (error, success) {
            if (error) {
                $('.orderSoupResult').html(`<p>Something went wrong: ${error}</p>`)
                    .removeClass("red")
                    .removeClass("green")
                    .addClass("red");
            } else {
                $('.orderSoupResult').html(`<a href="https://rinkeby.etherscan.io/tx/${success}" target="_blank">${success}</a>`)
                    .removeClass("red")
                    .removeClass("green")
                    .addClass("green");
            }
        });
    },
};
