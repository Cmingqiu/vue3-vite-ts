module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true //解决编译器宏报错'withDefaults' is not defined
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021
  },
  rules: {
    'no-unused-vars': 'off',
    'vue/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-expressions': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        tabWidth: 2,
        indent: 2,
        semi: false,
        trailingComma: 'none',
        endOfLine: 'auto'
      }
    ]
  },
  globals: {
    defineProps: 'readonly'
  }
}
