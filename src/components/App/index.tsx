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
            <PrivateRoute errors={isErrors} loading={isLoading} redirect exact path='/signIn' component ={SignInForm}/>
            <PrivateRoute errors={isErrors} loading={isLoading} redirect exact path='/signUp' component={SignUpForm}/>
            <PrivateRoute errors={isErrors} loading={isLoading} redirect exact path='/signUp/verify' component={VerifyForm}/> 
            <PrivateRoute errors={isErrors} loading={isLoading} redirect exact path='/forgotPassword' component={ForgotPasswordForm}/> 
            <PrivateRoute errors={isErrors} loading={isLoading} redirect exact path='/resetPassword' component={ResetPasswordForm}/>  
          </Switch>
        </Router>
        <Notification /> 
      </main> 
    </>
  );
}

export default App; 