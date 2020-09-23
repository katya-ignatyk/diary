import React from 'react';
import styles from './button.css';
import Loader from '../../Loader';

interface IButtonProps {
  isLoaderActive : boolean;
  text : string;
  onClick ?: () => void;
}

function Button(props : IButtonProps) {
  const { isLoaderActive, text, onClick } = props;
  return (
    <>
    {
      !isLoaderActive && (
      <button type="submit" className={styles.form__button} onClick={onClick}>
        {text}
      </button>) ||
      <Loader />
    }
    </>
  );
}

export default Button;