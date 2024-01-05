# Eslint-config-vue3

## Установка

До установки нужно добавить .npmrc, который содержит ссылку на registry.

```
@upikoth:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${UPIKOTH_PACKAGES_READ}
```

Также в env переменных должен быть токен, дающий доступ к registry UPIKOTH_PACKAGES_READ

Добавление UPIKOTH_PACKAGES_READ:

```
export UPIKOTH_PACKAGES_READ=значение переменной в zsh.rc.
```

При установке этой библиотеки нужные плагины, а также сам eslint будут установлены автоматически.

```sh
npm install @upikoth/eslint-config-vue3
```

После установки библиотеки:
+ добавить файл .eslintrc.cjs
```
const eslintConfig = require('@upikoth/eslint-config-vue3')

module.exports = eslintConfig
```
+ добавить файл .eslintignore
+ добавить скрипт в package.json
```
"lint:js": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts"
```

Дополнительные настройки для vscode:
+ В рекомендуемы расширения проекта добавить "dbaeumer.vscode-eslint"
