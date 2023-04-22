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
+ добавить файл .stylelintrc.js
```
const config = require('@upikoth/stylelint-config-vue3')

module.exports = config

```
+ добавить скрипт в package.json
```
"lint:css": "stylelint \"src/**/*.{vue,scss}\"",
```

Дополнительные настройки для vscode:
+ В рекомендуемы расширения проекта добавить "dbaeumer.vscode-eslint"
