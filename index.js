// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	parserOptions: { ecmaVersion: 'latest' },
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'@vue/eslint-config-typescript'
	],
	overrides: [
		{
			files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
			extends: ['plugin:cypress/recommended']
		}
	],
	rules: {
		quotes: ['error', 'single'],
		indent: ['error', 'tab'],
		'no-trailing-spaces': 'error',
		'no-console': 'warn',
		'eol-last': ['error', 'always'],
		semi: ['error', 'never'],
		'comma-dangle': ['error', 'never'],
		'max-len': ['error', { code: 120 }],
		'object-property-newline': 'error',
		'object-curly-newline': ['error', { multiline: true }],
		'object-curly-spacing': ['error', 'always'],
		'brace-style': 'error',
		'no-multiple-empty-lines': [
			'error',
			{ max: 1 }
		]
	}
}
