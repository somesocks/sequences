#!/usr/bin/env bash

#
# turn this on to debug script
# set -x

#
# abort on error
set -e

cd ./dist && npm publish --dry-run
