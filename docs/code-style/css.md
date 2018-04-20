# CSS

We use `postcss` for our styling that means that by default our styles are locally scoped. Because of that there is no need to follow strict naming convention such as BEM, SMACS, etc... Using `postcss` and referencing styles in components allows us for easy tracking of unused or dead css rules.

## Linting

We use `stylelint` for linting our css with `stylelint-config-standard` settings

## Class names

Each class name in the `style.pcss` file uses `camelCase`. This allows us to easily reference it in `.jsx` files - i.e.:
```javascript
className={css.camelCase}
```

Because each class name is scoped locally we do not have to worry about global class names therefore we can use short and concise element names:
```css
.container { ... }
/* VS * /
.component_container { ... }
```

## Variables

All variables are put into a single file `variables.pcss` in `styles` directory and they are grouped by type

## PostCSS features

Using `postcss` allows us to use future css rules and syntax that is being standardized by W3C group. Each `postcss` plugin can be treated as polyfill for missing css feature

Currently enabled plugins:
- `postcss-cssnext`
- `postcss-import` (enables variables import)
- `postcss-custom-media` (enables custom media queries)
- `postcss-nested` (enables `SASS`-like rules nesting)
- `postcss-color-function` (enables css color function)
- `postcss-css-variables` (enables css variables)


Consider:
- https://github.com/simlrh/postcss-modules-dead-css
- https://github.com/quarterto/postcss-remove-unused
- https://github.com/uncss/postcss-uncss
