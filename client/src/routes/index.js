import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'

import Login from '../components/Login'
import Register from '../components/Register';

import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import NotForbidden from '../components/NotForbidden';

const Container = styled.div`
  text-align: center;
`
export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <Container>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
          <Route>
            <NotForbidden />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default Routes
