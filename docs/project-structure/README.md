# Project structure

* `config` (app related configs)
* `docs` (documentation of app)
* `scripts` (documentation of app)
* `source`
  * `client`
    * `assets` (images, fonts, etc..)
    * [components](components.md) (components not using `logic`)
    * [containers](containers.md) (components using `logic`)
    * [layouts](layouts.md) ([pages](pages.md) layout components)
    * [logic](logic.md) (models, services, etc...)
    * [pages](pages.md) (components that maps to app routes or state)
  * `server`
* [.eslintrc](code-style) (strict code style rules)
* `CHANGELOG.md` (semver compliant code changes entries)
* `package.json` (app dependencies, scripts)
* `README.md` (semver compliant code changes entries)
* `webpack.config.babel.js` (webpack's bootstrap file)
* `yarn.lock` (locked versions list of app dependencies)
