import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import pluginPrettierRecommendedConfigs from 'eslint-plugin-prettier/recommended'
export default [
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.vue', '**/*.jsx', '**/*.js'],

		// any additional configuration for these file types here
	},
	{ ignores: ['**.d.ts', '/packages/components/dist/*', '**/node_modules/', '.git/', 'node_modules'] },
	// eslint 默认推荐规则
	pluginJs.configs.recommended,
	// ts 默认推荐规则
	...tseslint.configs.recommended,
	// vue3 基础推荐规则
	...pluginVue.configs['flat/recommended'],

	pluginPrettierRecommendedConfigs,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2020,
				...globals.node,
			},
			ecmaVersion: 2020,
			parser: vueParser,
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
]
