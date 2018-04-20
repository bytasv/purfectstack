# Unit bundle

Any code that can/should have a corresponding spec should be part of `Unit bundle`.

Unit bundle is pretty much the same as is [component bundle](component-bundle.md)

## Example `UserModel` class

`UserModel` has it's own folder named `UserModel` which contains:
- `index.js` file - `UserModel` class definition
- `spec.js` file - class tests are held here

```bash
UserModel
│
├─index.js
│
└─spec.js
```
