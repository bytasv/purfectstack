import React from 'react'
import ReactDOM from 'react-dom'

import Root from './pages/Root'

// if (module.hot) {
//   module.hot.accept()
// }

// const test = hot(module)(Root)

ReactDOM.render(<Root />, document.querySelector('#root'))
// ReactDOM.render(test, document.querySelector('#root'))
