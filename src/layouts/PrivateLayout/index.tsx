import React, { PropsWithChildren } from 'react';
import Header from '../../components/shared/Header';
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