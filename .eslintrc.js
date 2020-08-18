module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
	rules: {
    '@typescript-eslint/no-var-requires': [ 'warn' ],

		'eqeqeq': ['error', 'smart'],
		'import/no-commonjs': [ 'off' ],
		'no-console': [ 'warn' ],
		'no-else-return': [ 'off' ],
		'no-empty-function': [ 'warn' ],
		'no-unused-vars': [ 'warn' ],
		'no-var': [ 'off' ],
		'prefer-const': [ 'warn' ],
		'prefer-rest-params': [ 'off' ],
		'prefer-spread': [ 'off' ],
		'require-jsdoc': [ 'warn' ],
	}
};
