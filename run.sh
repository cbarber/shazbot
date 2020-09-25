#!/usr/bin/env bash

if [ "$#" -ne 2 ]; then
  echo "Usage: `basename $0` username password"
  exit 0
fi

docker run -v ${PWD}:/e2e -w /e2e --env CYPRESS_USERNAME=$1 --env CYPRESS_PASSWORD=$2 cypress/included:3.4.0
