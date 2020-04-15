import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(state => state.auth)
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [auth])

  if (isAuthenticated === null) {
    return <></>
  }

  return (
    <Route {...rest} render={props =>
      !isAuthenticated ? (
        <Redirect to='/login' />
      ) : (
          <Component {...props} />
        )
    }
    />
  );
};

export default PrivateRoute;