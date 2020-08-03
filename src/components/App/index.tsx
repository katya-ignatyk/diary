import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpForm from '../../containers/SignUpContainer';
import VerifyForm from '../../containers/VerifyFormContainer';
import Notification from '../../containers/NotificationsContainer';
import styles from './styles.css';
import Header from '../Header';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Router>
          <Switch>
            <Route exact path='/signUp' component={SignUpForm}/>
            <Route exact path='/signUp/verify' component={VerifyForm}/>        
          </Switch>
        </Router>
        <Notification />
      </main> 
    </>
  );
}

export default App;