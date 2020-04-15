import React, {useEffect } from 'react';
import { Router, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux';

import Login from '../components/Login'
import Register from '../components/Register';
import Main from '../containers/Main';
import Forbidden from '../components/Forbidden';
import PrivateRoute from '../components/PrivateRoute';
import { isLoginCheck } from '../actions/user';
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
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute exact path='/home' component={Main} />
        <Route component={Forbidden} />
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