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
    indent: ['error', 'tab'],
    'no-console': 'warn',
  },
};
