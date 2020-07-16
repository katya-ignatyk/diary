import * as React from 'react';
import queryString from 'query-string';
import styles from './styles.css';
import { useLocation } from 'react-router-dom';
import { IVerifyReduxProps } from './interfaces';


function VerifyForm(props : IVerifyReduxProps) {
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const token = String(parsed.token);
  return (
    <div className={styles['verifyForm-wrapper']}>
      <button onClick={() => props.verifyUser(token)}>Click here</button>
    </div>
  );
}

export default VerifyForm;