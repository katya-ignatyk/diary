import React from 'react';
import styles from './styles.css';

interface IErrorProps {
  text : string;
}

function Text(props : IErrorProps) {
  const { text } = props;
  return (
    <div className={styles['form__text']}>
      {text}
    </div>

  );
}

export default Text;