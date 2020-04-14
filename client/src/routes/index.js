import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'
import { connect } from 'react-redux';

import Login from '../components/Login'
import Register from '../components/Register';
import Main from '../containers/Main';
import Forbidden from '../components/Forbidden';
import LayoutsSwitcher from '../components/LayoutsSwitcher';

import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';

const Container = styled.div`
  text-align: center;
`
export const history = createBrowserHistory()

function Routes({ isLogin }) {
  return (
    <Router history={history}>
      <Container>
        <Switch>
          <Route exact path='/'>
            <LayoutsSwitcher isLoggedIn={isLogin} />
          </Route>
          <Route path='/home' component={Main} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route component={Forbidden} />
        </Switch>
      </Container>
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    isLogin: state.user.isLogin
  }
};

export default connect(mapStateToProps)(Routes);