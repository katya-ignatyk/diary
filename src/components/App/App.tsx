import * as React from 'react';
import 'normalize.css';
import styles from './App.css';
import SignUpForm from '../../containers/SignUpContainer';

function App() {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <SignUpForm />
      </div>
    </React.Fragment>
  );
}

export default App;
