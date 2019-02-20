#!/bin/sh

# compare req&res by ab cmd

# before: npm run start

ab -n1000 -c50 http://127.0.0.1:3300/react/none
ab -n1000 -c50 http://127.0.0.1:3300/react/legacy
ab -n1000 -c50 http://127.0.0.1:3300/react/mix
ab -n1000 -c50 http://127.0.0.1:3300/react/new