import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import linkStyles from '../../scss/link/styles.css';

export const SettingsLayout : React.FunctionComponent = (props) => {
  return (
    <div className={styles['settings__container']}>
      <nav className={styles.menu}>
        <Link className={linkStyles['form__link']} to='/settings'>
          Profile
        </Link> 
        <Link className={linkStyles['form__link']} to='/notifications'>
          Notifications
        </Link>
      </nav>
      <div className={styles['settings__form__wrapper']}>
        { props.children }
      </div>
    </div>
  );
};