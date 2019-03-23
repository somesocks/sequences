# find ./dist -name '*mocha.tests.js' | xargs mocha --timeout 10000
mocha \
	"./dist/**/*.mocha.tests.{js,jsx}" \
	--recursive \
	--exit \
	--sort \
	--timeout=60000
	# --require ./mocha/babel.js \
	# --require ./mocha/dom.js
