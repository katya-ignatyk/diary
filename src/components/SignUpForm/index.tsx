import * as React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps } from 'formik';
import { IUserRegistrationData, IUserRegistrationReduxProps } from './interfaces';
import Loader from '../Loader';
import newspaperImage from '../../assets/img/newspaper.jpg';
import formStyles from '../../scss/form/form.css';
import buttonStyles from '../../scss/button/button.css';

function InnerForm(props : IUserRegistrationReduxProps & FormikProps<IUserRegistrationData>) {
  const { handleSubmit, handleChange, values, touched, errors, isLoaderActive } = props;
  return (
    <div className={formStyles['form__container']}>
      <div className={formStyles['form__image-wrapper']}>
        <img className={formStyles['form__image']} src={newspaperImage} alt="Newspaper image" />
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
          {!isLoaderActive && (
            <button type="submit" className={buttonStyles['form__button']}>
              Sign Up
            </button>) ||
            <Loader />}
        </form>
      </div>
    </div>
  );
}

const SignUpForm = withFormik<IUserRegistrationReduxProps, IUserRegistrationData>({
  mapPropsToValues: (props) => ({
    username: '',
    email: '',
    password: '',
    fetchUser: props.fetchUser,
    startLoader: props.startLoader,
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    username: Yup.string().min(3, 'Username must be at least 3 characters').max(20).required('Username is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  }),
  handleSubmit: (values : IUserRegistrationData & IUserRegistrationReduxProps) => {
    const { username, email, password } = values;
    values.fetchUser({ username, email, password });
    values.startLoader();
  }
})(InnerForm);

export default SignUpForm;
