import * as React from 'react';
import * as Yup from 'yup';
import queryString from 'query-string';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Loader from '../Loader';
import diaryForResetPassword from '../../assets/img/diaryForResetPassword.jpg';
import formStyles from '../../scss/form/form.css';
import buttonStyles from '../../scss/button/button.css';
import { IResetPasswordReduxProps } from './interfaces';

function ResetPasswordForm(props : IResetPasswordReduxProps) {
  const history = useHistory();
  const parsed = queryString.parse(location.search);
  const token = parsed.token;

  if (!token || typeof token !== "string"){
    return null;
    //404 page
  }
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    onSubmit: values => {
      const { password } = values;
      props.startLoader();
      props.resetPassword(password, token).then((resolved : boolean) => {
        if (resolved) {
          typeof(resolved) === 'string'? history.push('/forgotPassword') : history.push('/signIn');
        }
      });
    },
    validationSchema: 
      Yup.object().shape({
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        confirmPassword: Yup.string().required('Password is required').oneOf([Yup.ref('password')], 'Passwords do not match')
      })
  });
  const { handleSubmit, handleChange, values, touched, errors } = formik;
  const { isLoaderActive } = props;
  return (
    <div className={formStyles['form__container']}>
      <div className={formStyles['form__image-wrapper']}>
        <img className={formStyles['form__image']} src={diaryForResetPassword} alt="Newspaper image" />
      </div>
      <div className={formStyles['form__wrapper']}>
        <div className={formStyles['form__title']}>
          <h1>Reset password</h1>
        </div>
        <form className={formStyles['form']} onSubmit={handleSubmit}>
         <div className={formStyles['form-group__wrapper']}>
            <label className={formStyles['form-group__label']} htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className={formStyles['form-group__input']}
              onChange={handleChange}
              value={values.password}
            />
            <div className={formStyles['form-group__input__invalid-feedback']}>{touched.password && errors.password && errors.password}</div>
          </div>
          <div className={formStyles['form-group__wrapper']}>
            <label className={formStyles['form-group__label']} htmlFor="confirm_password">Confirm password</label>
            <input
              id="confirm_password"
              name="confirmPassword"
              type="password"
              className={formStyles['form-group__input']}
              onChange={handleChange}
              value={values.confirmPassword}
            />
            <div className={formStyles['form-group__input__invalid-feedback']}>{touched.confirmPassword && errors.confirmPassword && errors.confirmPassword}</div>
          </div>
          {!isLoaderActive && (
            <button type="submit" className={buttonStyles['form__button']}>
              Reset password
            </button>)  
          || <Loader /> }
        </form>
      </div>
    </div>
  
  );
}

export default ResetPasswordForm;
