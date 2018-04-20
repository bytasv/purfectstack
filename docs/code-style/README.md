# Code style

Code style

## ESLint

`ESLint` is configured to strictly follow these rules sets:
- [Standard](https://standardjs.com/rules.html) rule set
- [ESLint React plugin](https://github.com/yannickcr/eslint-plugin-react) `react/all` rule set (with exception of couple rules disabled)
- [ESLint Promise plugin](https://github.com/xjamundx/eslint-plugin-promise) TODO

Following strict rule set should embrace consistent code style and should help us avoid personal taste preferences in style. Disabling any rules should be discussed with others - *I don't like it* is not a good reason to disable it.

In order to get even more unified results code is piped through the [prettier](https://prettier.io) right before commiting it with pre-commit hook.

## File naming

- Every file containing `jsx` syntax should follow [component bundle](code-style/component-bundle.md) pattern
- Every other `js` file that includes spec should follow [Unit bundle](unit-bundle.md) pattern
