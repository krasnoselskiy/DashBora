import React from 'react';

import Login from './Login'
import Main from '../containers/Main'

const LayoutsSwitcher = ({ isLoggedIn }) => {
  return (
    <React.Fragment>
      {isLoggedIn
        ? <Main />
        : <Login />
      }
    </React.Fragment>
  )
}

export default LayoutsSwitcher;
