import * as React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Loader from '../Loader';
import newspaper from '../../assets/img/newspaper.jpg';
import formStyles from '../../scss/form/form.css';
import buttonStyles from '../../scss/button/button.css';
import { IForgotPasswordReduxProps } from './interfaces';

function ForgotPasswordForm(props : IForgotPasswordReduxProps) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: values => {
      const { email } = values;
      props.startLoader();
      props.sendEmail(email).then((resolved : boolean) => {
          if (resolved) {
            history.push('/'); 
          }
      });
    },
    validationSchema: 
      Yup.object().shape({
        email: Yup.string().email('Email is invalid').required('Email is required')
      })
  });
  const { handleSubmit, handleChange, values, touched, errors } = formik;
  const { isLoaderActive } = props;
  return (
    <div className={formStyles['form__container']}>
      <div className={formStyles['form__image-wrapper']}>
        <img className={formStyles['form__image']} src={newspaper} alt="Newspaper image" />
      </div>
      <div className={formStyles['form__wrapper']}>
        <div className={formStyles['form__title']}>
          <h1>Forgot password</h1>
        </div>
        <form className={formStyles['form']} onSubmit={handleSubmit}>
         <div className={formStyles['form-group__wrapper']}>
            <label className={formStyles['form-group__label']} htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className={formStyles['form-group__input']}
              onChange={handleChange}
              value={values.email}
            />
            <div className={formStyles['form-group__input__invalid-feedback']}>{touched.email && errors.email && errors.email}</div>
          </div>
          {!isLoaderActive && (
            <button type="submit" className={buttonStyles['form__button']}>
              Send email
            </button>)  
          || <Loader /> }
        </form>
      </div>
    </div>
  
  );
}

export default ForgotPasswordForm;
