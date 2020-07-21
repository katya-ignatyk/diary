import * as React from 'react';
import queryString from 'query-string';
import styles from './styles.css';
import { useLocation } from 'react-router-dom';
import { IVerifyReduxProps } from './interfaces';
import Notification from '../../containers/NotificationsContainer';

function VerifyForm(props : IVerifyReduxProps) {
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const token = parsed.token;

  const handleClick = () : void => {
    if (!token || typeof token !== "string"){
      return null;
    }
    props.verifyUser(token); 
  };

  return (
    <div className={styles['verifyForm-wrapper']}>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default VerifyForm;