# Containers
(`React` components using `logic`)

----

Components that rely on using `logic` provided by external APIs (`redux`, `mobx`, `graphql`, etc...)

#### Example
```jsx
import React from 'react'
import PT from 'prop-types'
import style from './style.pcss'
import Form from 'components/Form'
import { connect } from 'react-redux'
import { createSession } from 'logic/actions/auth'

export default class LoginForm extends PureComponent {
  static propTypes = {
    createSession: PT.func.isRequired
  }

  async handleSubmit ({ email, password }) {
    const { createSession } = this.props

    await createSession(email, password)


  }

  render () {
    const { disabled, type, children } = this.props

    return (
      <Form onSubmit={this.handleSubmit}>
        <input name='email' type='email' />
        <input name='password' type='password' />

        <button type='submit'>Login</button>
      </Form>
    )
  }
}

export default connect(null, (dispatch) => ({
  createSession: (email, password) => {
    dispatch(createSession(email, password))
  }
})(LoginForm)
```

**Default export** of such component should always be decorated component that is ready to be used in application:
```javascript
export default connect(null, (dispatch) => ({
  createSession: (email, password) => {
    dispatch(createSession(email, password))
  }
})(LoginForm)
```

For testing purposes we should always **export undecorated** version (we consider decorators working and don't duplicate that effort):
```javascript
export default class LoginForm extends PureComponent {
```
