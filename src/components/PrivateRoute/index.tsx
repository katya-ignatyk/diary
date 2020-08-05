import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loader from '../Loader';

interface IPrivateRouteProps {
  component : React.FC;
  redirect ?: boolean;
  errors : boolean;
  loading : boolean;
  exact ?: boolean;
  path : string;
}

function PrivateRoute(props : IPrivateRouteProps) {
  const { component: Component, redirect, errors, loading, exact, path } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        //user is authorized 
        if (!errors && loading) {
          if (redirect) {
            return <Redirect to='/home'/>;
          }
          return <Component />;
          // not authorized
        } else if (errors && !loading) {
          if (redirect) {
            return <Component />;
          }
          return <Redirect to='/signIn' />;
        }
        return <Loader />;
      }}
    />
  );
  
};

export default PrivateRoute;