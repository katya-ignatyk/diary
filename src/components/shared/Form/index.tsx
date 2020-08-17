import React, { PropsWithChildren } from 'react';
import styles from './styles.css';
import PublicLayout from '../../../containers/PublicLayoutContainer';

interface IFormProps {
  imgSrc : string;
  title : string;
  onSubmit ?: () => void;
}

export const Form : React.FunctionComponent<PropsWithChildren<IFormProps>> = ({ children, imgSrc, title, onSubmit }) => {

  return (
    <PublicLayout>
      <div className={styles['form__container']}>
        <div className={styles['form__image-wrapper']}>
          <img className={styles['form__image']} src={imgSrc} alt=""/>
        </div>
        <div className={styles['form__wrapper']}>
          <h1 className={styles['form__title']}>{title}</h1>
          <form className={styles.form} onSubmit={onSubmit}>
            {children}
          </form>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Form;