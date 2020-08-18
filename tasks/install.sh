#!/usr/bin/env bash

#
# turn this on to debug script
# set -x

#
# abort on error
set -e


# `test-mocha` runs mocha tests

# expects to be run from root
ROOT_DIR=.
SRC_DIR=$ROOT_DIR/src
DIST_DIR=$ROOT_DIR/dist

# add local node_modules bin to path
NODE_BIN=$ROOT_DIR/node_modules/.bin
PATH=$PATH:$NODE_BIN

pnpm install;
