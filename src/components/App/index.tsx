import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpForm from '../../containers/SignUpContainer';
import VerifyForm from '../../containers/VerifyFormContainer';
import Notification from '../../containers/NotificationsContainer';
import styles from './styles.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <Router>
        <Switch>
          <Route exact path='/signUp' component={SignUpForm}/>
          <Route exact path='/signUp/verify' component={VerifyForm}/>                
        </Switch>
      </Router>
      <Notification />
    </div> 
  );
}

export default App;