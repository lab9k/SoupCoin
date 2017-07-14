#!/bin/bash
# called when logfile.csv changes
# scrapes logfile.csv and runs the mintscript
IN=$(cat logfile.csv | tail -n1 | cut -d';' -f4,6 | xargs)
arrIN=(${IN//;/ })
amount=${arrIN[0]}
address=${arrIN[1]}
node "soupcoinmintscript.js" $address $amount | tee "log"
exit 0;

