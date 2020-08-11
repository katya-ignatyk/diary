import * as React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useHistory, Link } from 'react-router-dom';
import { IUserRegistrationReduxProps } from './interfaces';
import Loader from '../Loader';
import diary from '../../assets/img/diaryForSignUp.jpg';
import formStyles from '../../scss/form/form.css';
import buttonStyles from '../../scss/button/button.css';

function SignUpForm(props : IUserRegistrationReduxProps) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      fetchUser: props.fetchUser,
      startLoader: props.startLoader
    },
    onSubmit: values => {
      const { username, email, password } = values;
      values.startLoader();
      values.fetchUser({ username, email, password }).then((resolved : boolean) => {
        if (resolved) {
          history.push('/signUp');
        }
      });
    },
    validationSchema: 
      Yup.object().shape({
        email: Yup.string().email('Email is invalid').required('Email is required'),
        username: Yup.string().min(3, 'Username must be at least 3 characters').max(20).required('Username is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
      })
  });
  const { handleSubmit, handleChange, values, touched, errors } = formik;
  const { isLoaderActive } = props;
  return (
    <div className={formStyles['form__container']}>
      <div className={formStyles['form__image-wrapper']}>
        <img className={formStyles['form__image']} src={diary} alt="Newspaper image" />
      </div>
      <div className={formStyles['form__wrapper']}>
        <div className={formStyles['form__title']}>
          <h1>Sign Up</h1>
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
            <label className={formStyles['form-group__label']} htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className={formStyles['form-group__input']}
              onChange={handleChange}
              value={values.username}
            />
            <div className={formStyles['form-group__input__invalid-feedback']}>{touched.username && errors.username && errors.username}</div>
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
            <div className={formStyles['form-group__input__invalid-feedback']}>{touched.password && errors.password && errors.password}</div>
          </div>
          {
            !isLoaderActive && (
            <button type="submit" className={buttonStyles['form__button']}>
              Sign Up
            </button>) ||
            <Loader />
          }
          <div className={formStyles['form__link__wrapper']}>
            <span>Arleady registered? </span>
            <Link className={formStyles['form__link']} to='/signIn'>Sign In!</Link>
          </div>  
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
