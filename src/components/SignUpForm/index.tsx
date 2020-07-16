import * as React from 'react';
import { withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { IUser, IReduxProps } from './interfaces';
import styles from './styles.css';
import newspaperImage from '../../assets/img/newspaper.jpg';

function Alert(props: AlertProps) {
  return <MuiAlert variant="filled" {...props} />;
}

function InnerForm(props: IReduxProps & FormikProps<IUser>) {
  const { handleSubmit, handleChange, values, touched, errors, isVerifyEmailSend, isEmailExists } = props;
  // const [isPopupOpen, setIsPopupOpen] = React.useState(true);
  // console.log(isPopupOpen);

  // const handleClose = () => {
  //   setIsPopupOpen(false);
  // };

  if (isVerifyEmailSend) {
    return <div> check your email to verify account</div>;
  }
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
          {(!props.isLoaderActive && (
            <button type="submit" className={styles['form-button']}>
              Sign Up
            </button>
          )) || (
            <div className={styles.loader}>
              <div className={styles.bubble}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.bubble}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.bubble}>
                <div className={styles.circle}></div>
              </div>
            </div>
          )}
        </form>
      </div>
      {isEmailExists && (
        <Snackbar open={isEmailExists} autoHideDuration={4000}>
          <Alert severity="error">User arleady exists</Alert>
        </Snackbar>
      )}
    </div>
  );
}

const SignUpForm = withFormik<IReduxProps, IUser>({
  mapPropsToValues: (props) => ({
    username: '',
    email: '',
    password: '',
    fetchUser: props.fetchUser,
    startLoader: props.startLoader,
    stopLoader: props.stopLoader,
    isEmailExists: props.isEmailExists,
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    username: Yup.string().min(3, 'Username must be at least 3 characters').max(20).required('Username is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  }),
  handleSubmit: (values: IUser & IReduxProps, { resetForm }) => {
    const { username, email, password } = values;
    values.fetchUser({ username, email, password });
    values.startLoader();
    // resetForm();
  },
})(InnerForm);

export default SignUpForm;
