# SoupCoin

## Initial testing environment

This will setup your environment to test your contracts on a private local testnet. Setup to test your contracts on a live testnet are below.

### Windows

1. install nodejs v8.1.2: [link](https://nodejs.org/en/)

1. install windows-build-tools (only on windows)

        $ npm install -g --production windows-build-tools

1. install embark-framework

        $ npm install -g embark
        # We need embark version 2.4.3, at the time of writing, the production version is 2.4.2, so to correctly install embark, usethe following command
        $ npm install -g git+https://github.com/iurimatias/embark-framework.git#develop

        # If you plan to use the simulator instead of a real ethereum node.
        $ npm -g install ethereumjs-testrpc

1. clone the repository

        $ mkdir <project-name>
        $ cd <project-name>
        $ git clone https://github.com/lab9k/SoupCoin.git
        $ cd SoupCoin/embark_demo

1. run the development server

        $ embark blockchain
        # or
        $ embark simulator
    open another terminal instance and run:

        $ embark run

### Linux

* similar to windows installation, with some extra steps when installing embark

    a detailed description can be found [here](https://github.com/iurimatias/embark-framework/wiki/Install-on-Linux)

### OSX

* similar to windows installation, with some extra steps when installing embark

    a detailed description can be found [here](https://github.com/iurimatias/embark-framework/wiki/Install-on-OSX)

## Live testnet environment

### Step 1: Download Geth
First, download the latest geth (1.6.1) to your laptop.
https://geth.ethereum.org/downloads/

(I did it to my MacBook Air).
Extract it and copy the `geth` binary to somewhere in your path.

Unknown whether Parity works as well. It will probably take some finagling
to work with the Geth-style Genesis block.

### Step 2: Download genesis block

```
wget https://www.rinkeby.io/rinkeby.json
```

### Step 3: Initialize 

At this point, you should probably start a `tmux` or `screen` session, so if you get
interrupted during syncing it will still keep going in the background.

To run a full node, download rinkeby.json and start Geth with:

```
geth --datadir=$HOME/.rinkeby init rinkeby.json
geth --networkid=4 --datadir=$HOME/.rinkeby --cache=512 --ethstats='yournode:Respect my authoritah!@stats.rinkeby.io' --bootnodes=enode://a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf@52.169.42.101:30303 --rpc --rpcapi="personal,eth,network"
```

Note that the credentials here `yournode:Respect my authoritah!` appear to be necessary.
Unknown whether you can create your own creds on `stats.rinkeby.io` so that you can collect your own testnet mining stats :)

SECURITY WARNINGS: We've enabled RPC and also loaded the `personal` module to allow testing and participating in smart contracts.
However, if you do these things on a mainnet node with your unlocked wallet exposed to the internet, you could get hacked
and all your monies stolen. I'll write a separate gist about a secure way to participate in a mainnet contract with real ETH.

You can download Geth from https://geth.ethereum.org/downloads/.

On a MacBook Air with a 10 MBps (standard home internet download speeds),
I was able to sync all 187k blocks in < 7 minutes.

### Step 4: Create an account

In a separate `tmux` pane or `screen` buffer or a separate terminal completely, create an account and save the password somewhere safe.

First, symlink the IPC file so you can `geth attach` to the existing geth process.

On Linux:
```
mkdir -p ~/.ethereum
ln -s ~/.rinkeby/geth.ipc ~/.ethereum/
```

On Mac:
```
mkdir -p ~/Library/Ethereum
ln -s ~/.rinkeby/geth.ipc ~/Library/Ethereum
```

After that, attach the console
```
geth attach
```

and create an account (substituting a much better password than `notmyrealpassword`.

```
Welcome to the Geth JavaScript console!

instance: Geth/v1.6.1-stable-021c3c28/darwin-amd64/go1.8.1
 modules: admin:1.0 clique:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

> eth.accounts
[]
> personal.newAccount("notmyrealpassword")
"0xb2e9fe08ca9a0323103883fe12c9609ed380f475"
> eth.coinbase
"0xb2e9fe08ca9a0323103883fe12c9609ed380f475"
> eth.getBalance(eth.coinbase)
0
```
You'll see a different address than `0xb2e9fe08ca9a0323103883fe12c9609ed380f475`. That one's mine, provided for illustration.
Save your password in a secret place, preferrably encrypted. I use Evernote encrypted text, but you can use any password manager
like 1Password, LastPass, Dashlane, etc.

Leave that terminal open for now.

### Step 5: Request ETH

Because Kovan and Rinkeby both use Proof-of-Authority (clique) to grant ETH, you'll need to request some to get started.
However, unlike Kovan which requires you to bootstrap by requesting KETH from another human being,
Rinkeby has a super-slick automated faucet, where you submit your address (copied from above) and submit a public gist.

Go to `http://gist.github.com` and create a gist, pasting a single line into it which is your Rinkeby address.
[Mine looks like this.](https://gist.github.com/cryptogoth/4e404fb58808a241f622afe80a659c05)

Copy the address of the gist, e.g. https://gist.github.com/cryptogoth/4e404fb58808a241f622afe80a659c05
Go to the `Crypto Faucet` section of https://rinkeby.io
and paste it into the blank.

Choose an option from the dropdown which corresponds to how much Ether you need and how frequently (requesting more Ether will take
longer between requests). I requested 3 ETH in 8 hours. Don't worry, you'll get your ETH in seconds, but you can't
request again for another 8 hours. This is to prevent spammers from swamping the network by overpowering it with mining power
and then out-spending everyone else.

This is the transaction where I received my 3 ETH:
https://rinkeby.etherscan.io/tx/0xf54c0101b71c645032b786b4eb3f0f0402b665575d34903f5fd1c911aaa22ebb

Now, back in your geth console, wait for at most 15 seconds for the next block to be found, and verify your balance again
```
> eth.getBalance(eth.coinbase)
3000000000000000000
```

Woohoo! You're rich, in testnet wei :)

If you found this guide useful, follow us on Twitter at @InvisibleLearn
or join us on Slack: http://invisible-slack.herokuapp.com/