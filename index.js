module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/no-deprecated-slot-attribute': 0,
    'vue/html-indent': ['error', 'tab'],
  },
};
