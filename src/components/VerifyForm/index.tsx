import * as React from 'react';
import queryString from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';
import Loader from '../Loader';
import newspaperImage from '../../assets/img/newspaper.jpg';
import formStyles from '../../scss/form/form.css';
import buttonStyles from '../../scss/button/button.css';
import { IVerifyReduxProps } from './interfaces';

function VerifyForm(props : IVerifyReduxProps) {
  const history = useHistory();
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const token = parsed.token;
  const { startLoader, isLoaderActive } = props;

  const handleClick = () : void => {
    startLoader();
    if (!token || typeof token !== "string"){
      return null;
    }
    props.verifyUser(token)
    .then((resolved : boolean | string) => { 
      if (resolved) {
        typeof(resolved) === 'string'? history.push('/forgotPassword') : history.push('/'); 
      }
    });
  };

  return (
    <div className={formStyles['form__container']}>
      <div className={formStyles['form__image-wrapper']}>
        <img className={formStyles['form__image']} src={newspaperImage} alt=""/>
      </div>
      <div className={formStyles['form__wrapper']}>
        <h1 className={formStyles['form__title']}>
          Confirm
        </h1>
        <div className={formStyles['form__text']}>
          You have successfully created a Diary account.
          Please click on the button below to verify your accountand complete registration
        </div>
        {
          (!isLoaderActive && <button onClick={handleClick} className={buttonStyles['form__button']}>Click here</button>)
          || <Loader /> 
        }
      </div>
    </div>
  );
}

export default VerifyForm;