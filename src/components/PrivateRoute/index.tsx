import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loader from '../Loader';
import { IPrivateRouteProps } from './interfaces';

function PrivateRoute(props : IPrivateRouteProps) {
  const { component: Component, errors, loading, exact, path } = props;
  const isAuth = () => {
    if (errors && !loading) {
      return false; 
    }
    if (!errors && loading) {
      return true;
    }
  };

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        if (!errors && !loading) {
          return <Loader />;
        }
        return isAuth() ? <Component /> : <Redirect to='/signIn'/>;
      }}
    />
  );
};

export default PrivateRoute;