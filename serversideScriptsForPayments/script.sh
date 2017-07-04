#! /bin/bash

# echo "$1 $2 heeft net een betaling van $3 euro gedaan. Email: $4"

# echo "$1,$2,$3,$4" >> ./tmp/betaling.csv;

# geth --exec "loadScript("tmp/soupcoinscript.js"); jsFunction($1, $2, $3, $4)" attach;
# curl -s -F "token=aqsomyboc7wzvek9a9qvyd2y848o9m" \    -F "user=uuf5o4kfavch7w4kqr7b1exo2rkomc" \    -F "title=SoupCoin" \    -F "message=$1 $2 heeft net voor $3euro SoupCoins gekocht" https://api.pushover.net/1/messages.json

function runTransaction {

	geth attach --exec "loadScript(\"./tmp/soupcoinscript.js\"); processPayment(\"$1\",\"$2\",\"$3\",\"$4\")";
} 

function startGeth {

	 $(geth --networkid=4 --datadir=$HOME/.rinkeby --cache=512 --ethstats='''yournode:Respect my authoritah!@stats.rinkeby.io''' --bootnodes=enode://a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf@52.169.42.101:30303 --rpc --rpcapi="personal,eth,network" &>/dev/null &disown )
	 # $(disown)
}

if [ $(ps | grep geth | wc -l) -gt 1 ]

	then

	echo "Geth is running, attaching now!"

	runTransaction $1 $2 $3 $4

else

	echo "Geth not running, starting now:"

	startGeth

	echo "Geth is running now"

	sleep 10 

	echo "Running transaction"

	runTransaction $1 $2 $3 $4

fi


exit 0;

