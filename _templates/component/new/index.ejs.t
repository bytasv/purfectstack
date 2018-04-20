---
to: source/client/components/<%= name %>/index.jsx
---
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
