# JavaScript

Use `@autobind` decorator inside react components when you need to preserve proper `this`:

```js
@autobind
handleClick (event) {
  this.setState({ value: event.target.value })
}
```

Use `async/await` instead of `then/catch`

```js
async submitForm (values) {
  const { response } = await forms.submit(values)
}
```
