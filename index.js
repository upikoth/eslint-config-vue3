module.exports = {
  // Только этот конфиг флияет на этот проект, конфиги из родительских директорий не будут учитываться.
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: [
    // Набор правил https://eslint.org/docs/latest/rules/.
    'eslint:recommended',
    // Набор правил для vue3 https://eslint.vuejs.org/rules/.
    'plugin:vue/vue3-recommended',
    // Обертка над https://typescript-eslint.io/. Позволяет брать правила оттуда.
    '@vue/eslint-config-typescript',
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
    {
      files: ['*.vue'],
      rules: {
        // v-slot используется в ionic framework, поэтому добавлено в исключения.
        'vue/no-deprecated-slot-attribute': 0,
        'vue/html-indent': ['error', 'tab'],
      },
    },
  ],
  // Общие правила.
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 'tab'],
    'no-trailing-spaces': 'error',
    'no-console': 'warn',
    // В конце файла всегда должна быть пустая строка.
    'eol-last': ['error', 'always'],
    // Убирает ";" в конце строки.
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', { code: 120 }],
    // Настройки форматирования объектов json.
    'object-property-newline': 'error',
    'object-curly-newline': ['error', { multiline: true }],
    'object-curly-spacing': ['error', 'always'],
    'brace-style': 'error',
  },
};
