# React guidelines

## Setup & run app
1. `yarn install`
2. `yarn start`

#### Env
- [Webpack](https://webpack.js.org/)
- [Babel](http://babeljs.io/)
- [Yarn](https://yarnpkg.com/en/)

#### Application stack
- [React](https://facebook.github.io/react/) (View Layer)
- [Mobx](https://mobx.js.org/) (State manager)
- [Axios](https://github.com/mzabriskie/axios) (HTTP Library)
- [PostCSS](http://postcss.org/) (CSS Processor)
- [React router](https://reacttraining.com/react-router/)

#### Code quality
- [Jest](https://facebook.github.io/jest/) + [Enzyme](http://airbnb.io/enzyme/) (Unit testing)
- [Chrome Puppeteer](https://github.com/GoogleChrome/puppeteer) (E2E) TODO
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io)

### Commands:
- `yarn eslint` - Lint JavaScript
- `yarn stylelint` - Lint CSS
- `yarn lint` - `stylelint && eslint`
- `yarn test` - Unit tests
- `yarn start` - Start application locally
- `yarn docs` - Open react guidelines documentation
- `yarn deploy` - Deploy application to AWS S3 bucket
