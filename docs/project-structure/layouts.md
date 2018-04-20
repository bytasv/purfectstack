# Layouts
(`React` components primarily used for [pages](pages.md) but can be also used for component layouts)

----

#### Example
```javascript
import React, { PureComponent } from 'react'
import PT from 'prop-types'
import style from './style.pcss'

export default class SidebarContent extends Slotted {
  render () {
    return (
      <div className={style.container}>
        <div className={style.sidebar}>
          {this.renderSlot('sidebar')}
        </div>
        <div className={style.content}>
          {this.renderSlot('content')}
        </div>
      </div>
    )
  }
}
```

#### Layout usage example

```javascript
import React, { PureComponent } from 'react'
import PT from 'prop-types'
import style from './style.pcss'

import SidebarContent from 'layouts/SidebarContent'

export default class SomePage extends PureComponent {
  render () {
    return (
      <SidebarContent>
        <div data-slot='sidebar'>
          <Menu />
        </div>
        <div data-slot='content>
          Lorem ipsum....
        </div>
      </SidebarContent>
    )
  }
}
```
