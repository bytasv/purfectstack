import React, { PureComponent } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { Container, Menu } from 'semantic-ui-react'

import '../styles/main.pcss'

import { Home, List } from 'pages'


@hot(module)
export default class Root extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Menu pointing secondary>
            <Menu.Item as={NavLink} exact name="home" to="/" />
            <Menu.Item as={NavLink} exact name="list" to="/list" />

            <Menu.Menu position="right">
              <Menu.Item name="logout" />
            </Menu.Menu>
          </Menu>

          <Route component={Home} exact path="/" />
          <Route component={List} exact path="/list" />
        </Container>
      </BrowserRouter>
    )
  }
}
