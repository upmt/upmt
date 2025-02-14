import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import pluginQuasar from '@quasar/app-vite/eslint'
import vueTsEslintConfig from '@vue/eslint-config-typescript'

export default [
  {
    /**
     * Ignore the following files.
     * Please note that pluginQuasar.configs.recommended() already ignores
     * the "node_modules" folder for you (and all other Quasar project
     * relevant folders and files).
     *
     * ESLint requires "ignores" key to be the only one in this object
     */
    // ignores: []
  },

  ...pluginQuasar.configs.recommended(),
  js.configs.recommended,

  /**
   * https://eslint.vuejs.org
   *
   * pluginVue.configs.base
   *   -> Settings and rules to enable correct ESLint parsing.
   * pluginVue.configs[ 'flat/essential']
   *   -> base, plus rules to prevent errors or unintended behavior.
   * pluginVue.configs["flat/strongly-recommended"]
   *   -> Above, plus rules to considerably improve code readability and/or dev experience.
   * pluginVue.configs["flat/recommended"]
   *   -> Above, plus rules to enforce subjective community defaults to ensure consistency.
   */
  ...pluginVue.configs[ 'flat/essential' ],

  {
    files: ['**/*.ts', '**/*.vue'],
    rules: {
    }
  },
  // https://github.com/vuejs/eslint-config-typescript
  ...vueTsEslintConfig({
    // Optional: extend additional configurations from typescript-eslint'.
    // Supports all the configurations in
    // https://typescript-eslint.io/users/configs#recommended-configurations
    extends: [
      // By default, only the 'recommendedTypeChecked' rules are enabled.
      'recommendedTypeChecked'
      // You can also manually enable the stylistic rules.
      // "stylistic",

      // Other utility configurations, such as 'eslintRecommended', (note that it's in camelCase)
      // are also extendable here. But we don't recommend using them directly.
    ]
  }),

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
        ...globals.node, // SSR, Electron, config files
        process: 'readonly', // process.env.*
        ga: 'readonly', // Google Analytics
        cordova: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly', // BEX related
        browser: 'readonly' // BEX related
      }
    },

    // add your custom rules here
    rules: {
      'prefer-promise-reject-errors': 'off',

      // allow debugger during development only
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      '@typescript-eslint/consistent-type-imports': [ 'off', { prefer: 'type-imports' } ],

       quotes: ['off', 'double', { avoidEscape: true }],

       //  Indent with 4 spaces
       "indent": ["off", 4],

       "@typescript-eslint/no-use-before-define": [ 2, { "classes": false } ],

       // this rule, if on, would require explicit return type on the `render` function
       '@typescript-eslint/explicit-function-return-type': 'off',
       '@typescript-eslint/no-explicit-any': 'off',
       // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
       '@typescript-eslint/no-var-requires': [ 'off' ],

       // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
       // does not work with type definitions
       'no-unused-vars': 'off',
       'array-bracket-spacing': 'off',
       "key-spacing": "off",
       "@typescript-eslint/restrict-template-expressions": [ "off" ],
       "@typescript-eslint/ban-ts-comment": [ "off" ],
    }
  },

  {
    files: [ 'src-pwa/custom-service-worker.ts' ],
    languageOptions: {
      globals: {
        ...globals.serviceworker
      }
    }
  }
]
