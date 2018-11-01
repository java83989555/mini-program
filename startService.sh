#!/bin/bash
ps -ef | grep 'loan-web-platform-1.0-SNAPSHOT.jar' | grep -v grep| awk '{print $2}' | xargs kill -9
sleep 2
java -jar loan-web-admin-'1.0.0-SNAPSHOT'.jar --spring.profiles.active=dev,base &
