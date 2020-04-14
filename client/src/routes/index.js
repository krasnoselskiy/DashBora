import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { connect } from 'react-redux';

import Login from '../components/Login'
import Register from '../components/Register';
import Main from '../containers/Main';
import Forbidden from '../components/Forbidden';
import LayoutsSwitcher from '../components/LayoutsSwitcher';

import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';

export const history = createBrowserHistory()

function Routes({ isLogin }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/'>
          <LayoutsSwitcher isLoggedIn={isLogin} />
        </Route>
        <Route exact path='/home'>
          <Main isLoggedIn={isLogin} />
        </Route>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route component={Forbidden} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    isLogin: state.user.isLogin
  }
};

export default connect(mapStateToProps)(Routes);