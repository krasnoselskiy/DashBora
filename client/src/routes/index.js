import React, {useEffect } from 'react';
import { Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import MainLayout from '../layouts/MainLayout';
import EmptyLayout from '../layouts/EmptyLayout';
import Login from '../components/Login'
import Register from '../components/Register';
import Widgets from '../containers/Widgets';
import Widget from '../containers/Widget';
import Teams from '../containers/Teams';
import Team from '../components/team/Team';
import Profile from '../containers/Profile';
import Forbidden from '../components/Forbidden';
import { isLogined } from '../actions/login';
import { AppRoute } from './appRoute';
import history from './history';

import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';

function Routes() {
  useEffect(() => {
    isLogined();


  }, []);

  return (
    <Router history={history}>
      <Switch>
        <AppRoute exact path="/" layout={MainLayout} component={Widgets} />
        <AppRoute exact path="/widgets" layout={MainLayout} component={Widgets} />
        <AppRoute exact path="/widgets/:id" layout={MainLayout} component={Widget} />
        <AppRoute exact path="/teams" layout={MainLayout} component={Teams} />
        <AppRoute exact path="/teams/:id" layout={MainLayout} component={Team} />
        <AppRoute exact path="/profile" layout={MainLayout} component={Profile} />
        <AppRoute exact path="/login" layout={EmptyLayout} component={Login} />
        <AppRoute exact path="/register" layout={EmptyLayout} component={Register} />
        <AppRoute layout={EmptyLayout} component={Forbidden} />
      </Switch>
    </Router>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    isLogined: () => dispatch(isLogined())
  };
}

export default connect(null, mapDispatchToProps)(Routes);