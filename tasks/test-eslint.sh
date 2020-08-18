#!/usr/bin/env bash

#
# turn this on to debug script
# set -x

#
# abort on error
set -e

find ./src -name '*.ts' | xargs npx eslint --quiet
