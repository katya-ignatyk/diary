import * as React from 'react';
import styles from './styles.css';

function Loader() {
  return (
      <div className={styles.loader}>
        <div className={styles.bubble}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.bubble}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.bubble}>
          <div className={styles.circle}></div>
        </div>
      </div>
  );
}

export default Loader;
