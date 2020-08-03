import * as React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { IUserAuthData, IUserAuthReduxProps } from './interfaces';
import Loader from '../Loader';
import diary from '../../assets/img/diaryForSignIn.jpg';
import formStyles, { form } from '../../scss/form/form.css';
import buttonStyles from '../../scss/button/button.css';

function SignInForm(props : IUserAuthReduxProps) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      fetchUser: props.fetchUser,
      startLoader: props.startLoader
    },
    onSubmit: values => {
      const { email, password } = values;
      values.startLoader();
      values.fetchUser({ email, password })
      .then((resolved : boolean) => {
        if (resolved) {
          history.push('/home');
        }
      });
    },
    validationSchema: 
      Yup.object().shape({
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
      })
  });
  const { handleSubmit, handleChange, values, touched, errors } = formik;
  const { isLoaderActive } = props;
  return (
    <div className={formStyles['form__container']}>
      <div className={formStyles['form__image-wrapper']}>
        <img className={formStyles['form__image']} src={diary} alt="diary image" />
      </div>
      <div className={formStyles['form__wrapper']}>
        <div className={formStyles['form__title']}>
          <h1>Sign In</h1>
        </div>
        <form className={formStyles['form']} onSubmit={handleSubmit}>
          <div className={formStyles['form-group__wrapper']}>
            <label className={formStyles['form-group__label']} htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              className={formStyles['form-group__input']}
              onChange={handleChange}
              value={values.email}
            />
            <div className={formStyles['form-group__input__invalid-feedback']}>{touched.email && errors.email && errors.email}</div>
          </div>
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
            <div className={formStyles['form__forgot-password__wrapper']}>
              <Link className={formStyles['form__forgot-password__link']} to='/forgotPassword'>Forgot password?</Link>
            </div>
            <div className={formStyles['form-group__input__invalid-feedback']}>{touched.password && errors.password && errors.password}</div>
          </div>
          
          <div>{!isLoaderActive && (
            <button type="submit" className={buttonStyles['form__button']}>
              Sign In
            </button>) ||
            <Loader />
          }</div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
