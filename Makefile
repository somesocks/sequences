NPM=pnpm

TASKS=./tasks
NODE_BIN=./node_modules/.bin

.PHONY: default setup help

##
##
##	sequences
##		this is the base project makefile
##
##

default: help

##	COMMANDS
##

##		make help - display the help
##
help:
	@grep "^##.*" ./Makefile

##		make setup - setup for local development
##
setup:
	bash $(TASKS)/install.sh


##		make build - build the package
##
build:
	bash $(TASKS)/build.sh



##		make test - run test cases against the built package
##
test: test-mocha

test-mocha:
	bash $(TASKS)/test-mocha.sh




##		make package-check - list the files that will be present in the package
##
package-check:
	bash $(TASKS)/package-check.sh

##		make package-publish - publish the current dist dir
##
package-publish:
	bash $(TASKS)/package-publish.sh

##
##
