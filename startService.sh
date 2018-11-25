#!/bin/bash
ps -ef | grep 'mini-program-0.0.1-SNAPSHOT.jar' | grep -v grep| awk '{print $2}' | xargs kill -9
sleep 2
java -jar mini-program-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod,base &
