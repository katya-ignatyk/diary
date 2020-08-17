import React from 'react';
import styles from './styles.css';

interface IErrorProps {
  touched : boolean;
  errors : string;
}

function Error(props : IErrorProps) {
  const { touched, errors } = props;
  return (
    <div className={styles['form__error']}>
      {touched && errors }
    </div>

  );
}

export default Error;