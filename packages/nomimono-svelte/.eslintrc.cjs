module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:svelte/recommended', 'prettier'],
	plugins: ['simple-import-sort'],
	overrides: [{ files: ['*.svelte'] }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
    rules: {
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
	},
};
