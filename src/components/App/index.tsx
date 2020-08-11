import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import SignUpForm from '../../containers/SignUpContainer';
import SignInForm from '../../containers/SignInContainer';
import ForgotPasswordForm from '../../containers/ForgotPasswordContainer';
import VerifyForm from '../../containers/VerifyFormContainer';
import Notification from '../../containers/NotificationsContainer';
import ResetPasswordForm from '../../containers/ResetPasswordContainer';
import PrivateRoute from '../../components/PrivateRoute';
import Header from '../Header';
import styles from './styles.css';
import { IAppProps } from './interfaces';

function App(props : IAppProps) {
  const { fetchUser, isErrors, isLoading } = props;

  React.useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
    <Header />
      <main className={styles.main}>
        <Router>
          <Switch>
            <Route exact path='/signIn' component ={SignInForm}/>
            <Route exact path='/signUp' component={SignUpForm}/>
            <Route exact path='/signUp/verify' component={VerifyForm}/> 
            <Route exact path='/forgotPassword' component={ForgotPasswordForm}/> 
            <Route exact path='/resetPassword' component={ResetPasswordForm}/> 
            <PrivateRoute errors={isErrors} loading={isLoading} exact path='/home' component={() => <div>home</div>}/> 
          </Switch>
        </Router>
        <Notification /> 
      </main> 
    </>
  );
}

export default App; 