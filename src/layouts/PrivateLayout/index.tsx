import React from 'react';
import Header from '../../containers/HeaderContainer';
import styles from './styles.css';

export const PrivateLayout : React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        
        {children}
      </main>
    </>
  );
};