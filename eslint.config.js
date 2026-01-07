import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
			prettierConfig, // Disable ESLint rules that conflict with Prettier
		],
		plugins: {
			prettier: prettier,
		},
		rules: {
			'arrow-body-style': 'off', // Let Prettier handle this
			'prefer-arrow-callback': 'off', // Let Prettier handle this
		},
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
	},
]);
