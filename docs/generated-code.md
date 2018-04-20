# Generated code

In order to avoid burden of repetitive tasks when creating component or unit bundles there are a handful generator tasks that prepares and clean scaffold to work with

## Components

If you want to generate full component bundle you can run:

```
yarn new:component --name ComponentName
```

It will:
1. Add a line into main components `index.js` file responsible for re-exporting component
2. Create it's main `index.jsx` file with primitive `React` component boilerplate code and style imports

```jsx
import React, { PureComponent } from 'react'
import PT from 'prop-types'
import css from './style.pcss'

export default class <%= name %> extends PureComponent {
  static propTypes = {
    children: PT.node.isRequired
  }

  static defaultProps = {
  }

  render () {
    const { children } = this.props

    return (
      <div className={css.container}>
        {children}
      </div>
    )
  }
}
```

3. Create `spec.jsx` file with nessecary imports and ready to use blocks

```jsx
import <%= name %> from './index'

describe('<<%= name %>/>', () => {

})
```

4. Create `style.pcss`

## Containers

If you want to generate full container bundle you can run:

```
yarn new:container --name ContainerName
```

It will do same as for component generation except it will also have a named export that could be used for simpler testing
