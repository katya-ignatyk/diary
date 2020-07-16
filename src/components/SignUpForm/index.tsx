import * as React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps } from 'formik';
import newspaperImage from '../../assets/img/newspaper.jpg';
import Notification from '../../containers/NotificationsContainer';
import Loader from '../Loader';
import styles from './styles.css';
import { IUserRegistrationData, IUserRegistrationReduxProps } from './interfaces';

function InnerForm(props : IUserRegistrationReduxProps & FormikProps<IUserRegistrationData>) {
  const { handleSubmit, handleChange, values, touched, errors, isLoaderActive, isErrorNotification, isSuccessNotification } = props;
  return (
    <div className={styles['signUpForm-wrapper']}>
      <div className={styles['form-image']}>
        <img src={newspaperImage} alt="Newspaper image" />
      </div>
      <div className={styles['signUp-form']}>
        <div className={styles['form-title']}>
          <h1>Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              className={styles['form-input']}
              onChange={handleChange}
              value={values.email}
            />
            <div className={styles['invalid-feedback']}>{touched.email && errors.email && errors.email}</div>
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className={styles['form-input']}
              onChange={handleChange}
              value={values.username}
            />
            <div className={styles['invalid-feedback']}>{touched.username && errors.username && errors.username}</div>
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className={styles['form-input']}
              onChange={handleChange}
              value={values.password}
            />
            <div className={styles['invalid-feedback']}>{touched.password && errors.password && errors.password}</div>
          </div>
          {!isLoaderActive && (
            <button type="submit" className={styles['form-button']} disabled = {isSuccessNotification ? true : false}>
              Sign Up
            </button>) ||
            <Loader />}
        </form>
        {isErrorNotification && !isLoaderActive && <Notification severity={'error'}/>}
        {isSuccessNotification && !isLoaderActive && <Notification severity={'success'} />}
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
  handleSubmit: (values : IUserRegistrationData & IUserRegistrationReduxProps, { resetForm }) => {
    const { username, email, password } = values;
    values.fetchUser({ username, email, password });
    values.startLoader();
  },
})(InnerForm);

export default SignUpForm;
