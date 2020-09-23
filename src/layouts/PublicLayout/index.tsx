import React, { PropsWithChildren } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './styles.css';

export interface IPublicLayoutReduxProps {
  isErrors : boolean;
  isLoaded : boolean;
}

export const PublicLayout : React.FunctionComponent<PropsWithChildren<IPublicLayoutReduxProps>> = ({ children, isErrors, isLoaded }) => {
  return (
    <main className={styles.main}>
      {
        (isLoaded && !isErrors) ?
        <Redirect to='/home'/> :
        children 
      }
    </main>
  );
};