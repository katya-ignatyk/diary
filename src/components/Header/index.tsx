import * as React from 'react';
import styles from './styles.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.menu}>
          <li className={styles['menu__item']}>
            <a href="/signUp">Sign Up</a>
          </li>
          <li className={styles['menu__item']}>
            <a href="/signIn">sign In</a>
          </li>
        </nav>
      </header>
    </>
  );
}

export default Header;