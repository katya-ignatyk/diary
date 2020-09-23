import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateLayout } from '../../../layouts/PrivateLayout';
import { IPrivateRouteProps } from './interfaces';

function PrivateRoute(props : IPrivateRouteProps) {
  const { component: Component, errors, loaded, exact, path } = props;
  const isAuth = () => {

    if (errors && !loaded) {
      return false;
    }

    if (!errors && loaded) {
      return true;
    }
  };
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return isAuth() ? 
        (
          <PrivateLayout > 
            <Component /> 
          </PrivateLayout>
        ) : 
        <Redirect to='/signIn'/> ;
      }}
    />
  );
};

export default PrivateRoute;