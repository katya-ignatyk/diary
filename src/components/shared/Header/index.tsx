import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import linkStyles from '../../../scss/link/styles.css';
import avatarStyles from '../../../scss/avatar/styles.css';

interface IHeaderReduxProps {
  avatar : string;
}

function Header(props : IHeaderReduxProps) {

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.menu}>
          <Link className={linkStyles.form__link} to='/home'>Home</Link>
        </nav>
        <details className={styles.dropdown}>
          <summary className={styles.dropdown__toggle}>
            <img className={avatarStyles.avatar} src={props.avatar} alt="image"/>
          </summary>
          <ul className={styles.dropdown__menu}>
            <li className={styles.dropdown__menu__item}>
              <Link className={linkStyles.form__link} to="/profile">Profile</Link>
            </li>
            <li className={styles.dropdown__menu__item}>
              <Link className={linkStyles.form__link} to="/settings">Settings</Link>
            </li>
            <li className={styles.dropdown__menu__item}>
              <Link className={linkStyles.form__link} to="">Sign out</Link>
            </li>
          </ul>
        </details>
      </header>
    </>
  );
}

export default Header;