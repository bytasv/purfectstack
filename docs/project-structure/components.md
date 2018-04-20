# Components
(`React` components that are not using any `logic`)

----

Extremely deterministic components that may only have internal state and react to external `prop` changes. Such components are most commonly used as UI building blocks, they will always render the same output given the same input.

#### Example
```jsx
import React, { PureComponent } from 'react'
import PT from 'prop-types'
import style from './style.pcss'

export default class Button extends PureComponent {
  static propTypes = {
    disabled: PT.bool,
    type: PT.string.isRequired
  }

  static defaultProps = {
    disabled: false
  }

  render () {
    const { disabled, type, children } = this.props

    return (
      <button
        className={style.container}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    )
  }
}

```
