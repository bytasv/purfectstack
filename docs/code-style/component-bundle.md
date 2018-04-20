# Component bundle

Using react allows us to create atomic and reusable components.

Each react component consists of at least four or more files which are contained in the same folder:
- component definition
- style definition for component
- specs definition for component
- generated snapshots for component

Keeping these files separated doesn't make sense as they are not reusable on their own.

## Example `<Toolbar />` component

`<Toolbar />` has it's own folder named `Toolbar` which contains:
- `index.jsx` file - `React` class for component
- `style.pcss` file - component's css rules are defined here
- `spec.jsx` file - component's behaviour and API tests are held here
- `spec.snap` file - jest generated snapshots of components specs

```bash
Toolbar
│
├─index.jsx
│
├─style.pcss
│
├─spec.jsx
│
└─spec.snap
```

----

It is **unnecessary** to duplicate component's name in each definition:
```bash
## BAD
Toolbar
│
├─Toolbar.jsx
│
├─Toolbar.spec.jsx
│
├─Toolbar.snap
│
└─Toolbar.pcss
```

1. By using `index.js` for `React` class definition we can skip duplicated name when importing component in the code:
```javascript
import Toolbar from 'components/Toolbar'
// VS
import Toolbar from 'components/Toolbar/Toolbar'
```
2. Since all files ending with `spec.jsx?` are automatically included in testing suit we don't need to use name here as well.
3. When we define `React` class and want to reference styles we can do it concisely:
```javascript
import css from './style.pcss'
// VS
import css from './Toolbar.pcss'
```
