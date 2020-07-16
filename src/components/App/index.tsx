import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUpForm from '../../containers/SignUpContainer';
import VerifyForm from '../../containers/VerifyFormContainer';
import styles from './styles.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/signUp' component={SignUpForm}/>
          <Route exact path='/signUp/verify' component={VerifyForm}/>                
        </Switch>
      </BrowserRouter>
    </div> 
  );
}

export default App;