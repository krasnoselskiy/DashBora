import React, {useEffect } from 'react';
import { Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import MainLayout from '../layouts/MainLayout';
import LoginLayout from '../layouts/LoginLayout';
import Login from '../components/Login'
import Register from '../components/Register';
import Widgets from '../components/Widgets';
import Team from '../components/Team';
import Profile from '../components/Profile';
import Forbidden from '../components/Forbidden';
import { isLoginCheck } from '../actions/user';
import { AppRoute } from './appRoute';
import history from './history';

import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';

function Routes() {

  useEffect(() => {
    isLoginCheck();


  }, []);

  return (
    <Router history={history}>
      <Switch>
        <AppRoute exact path="/main" layout={MainLayout} component={Widgets} />
        <AppRoute exact path="/main/widgets" layout={MainLayout} component={Widgets} />
        <AppRoute exact path="/main/team" layout={MainLayout} component={Team} />
        <AppRoute path="/main/profile" layout={MainLayout} component={Profile} />
        <AppRoute exact path="/login" layout={LoginLayout} component={Login} />
        <AppRoute exact path="/register" layout={LoginLayout} component={Register} />
        <AppRoute layout={LoginLayout} component={Forbidden} />
      </Switch>
    </Router>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    isLoginCheck: () => dispatch(isLoginCheck())
  };
}

export default connect(null, mapDispatchToProps)(Routes);