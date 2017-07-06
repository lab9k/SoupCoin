#!/bin/bash

function runTransaction {
    date=$($(date --date="-1 days ago" +"%u") - 1 ) ;
    date2=$(( $date -1 )) ;
	geth attach --exec "loadScript(\"soupcoinburnscript.js\"); burnSoup(\"$date2\")";
}
 
function startGeth {
          $(geth --networkid=4 --datadir=$HOME/.rinkeby --cache=512 --ethstats='''yournode:Respect my authoritah!@stats.rinkeby.io''' --bootnodes=enode://a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab5616d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf@52.169.42.101:30303 --rpc --rpcapi="personal,eth,network" &>/dev/null &disown )
 }

if [ $(ps | grep geth | wc -l) -ge 1 ]
 19 
 20         then
 21 
 22         echo "Geth is running, attaching now!"
 23 
 24 else
 25 
 26         echo "Geth not running, starting now:"
 27 
 28         startGeth
 29 
 30         echo "Geth is running now"
 31 
 32         sleep 10
 33 
 34         echo "Running transaction"
 35 
 36 fi

runTransaction $1;

exit 0;
