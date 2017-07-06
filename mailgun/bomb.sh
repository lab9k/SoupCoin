#!/usr/bin/env bash
for run in {1..50};
do
    ./test.sh 4
    sleep 1
done
