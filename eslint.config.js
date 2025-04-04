import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		ignores: ['build', 'coverage', 'node_modules'],
		rules: {
			'no-unused-vars': 'error',
			semi: 'error',
		},
	},
]);
