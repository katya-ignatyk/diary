import * as React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import SignUpForm from '../../containers/SignUpContainer';
import SignInForm from '../../containers/SignInContainer';
import ForgotPasswordForm from '../../containers/ForgotPasswordContainer';
import VerifyForm from '../../containers/VerifyFormContainer';
import Notification from '../../containers/NotificationsContainer';
import ResetPasswordForm from '../../containers/ResetPasswordContainer';
import ProfileSettings from '../../containers/ProfileSettingsContainer';
import Notes from '../../containers/NotesContainer';
import PrivateRoute from '../shared/PrivateRoute';
import Loader from '../shared/Loader';
import { IAppProps } from './interfaces';
import './styles.global.css';

const history = createBrowserHistory();

function App(props : IAppProps) {
  const { fetchUser, isErrors, isLoaded } = props;

  React.useEffect(() => {
    fetchUser();
  }, []);

  if (!isLoaded && !isErrors) {
    return <Loader />;
  }

  return (
    <>
      <Router history={history}>
        <Switch>
          {/* auth routes */}
          <Route exact path='/signIn' component={SignInForm} />
          <Route exact path='/forgotPassword' component={ForgotPasswordForm}/> 
          <Route exact path='/resetPassword' component={ResetPasswordForm}/> 
          {/* registration routes */}
          <Route exact path='/signUp' component={SignUpForm}/>
          <Route exact path='/signUp/verify' component={VerifyForm}/> 
          {/* settings routes */}
          <PrivateRoute errors={isErrors} loaded={isLoaded} exact path='/settings' component={ProfileSettings}/> 

          <PrivateRoute errors={isErrors} loaded={isLoaded} exact path='/notes' component={Notes}/> 
        </Switch>
      </Router>
      <Notification /> 
    </>
  );
}

export default App; 