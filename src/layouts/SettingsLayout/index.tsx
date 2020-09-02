import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import linkStyles from '../../scss/link/styles.css';

export const SettingsLayout : React.FunctionComponent = ({ children }) => {
  return (
    <section className={styles.settings__container}>
      <nav className={styles.menu}>
        <Link className={linkStyles.form__link} to='/settings'>
          Profile
        </Link> 
        <Link className={linkStyles.form__link} to='/notifications'>
          Notifications
        </Link>
      </nav>
      <aside className={styles.settings}>
        { children }
      </aside>
    </section>
  );
};