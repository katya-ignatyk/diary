import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.menu}>
          <Link to='/settings'>Settings</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;