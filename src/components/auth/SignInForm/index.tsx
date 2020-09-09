import React from 'react';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import diary from '../../../assets/img/diaryForSignIn.jpg';
import linkStyles from '../../../scss/common/link/styles.css';
import Button from '../../../containers/ButtonContainer';
import Input from '../../shared/Form/Input';
import Error from '../../shared/Form/Error';
import Form from '../../shared/Form';
import { IUserAuthReduxProps } from './interfaces';
import { emailValidation, passwordValidation } from '../../../validation';

function SignInForm(props : IUserAuthReduxProps) {
  const { signIn } = props;
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      const { email, password } = values;
      
      signIn({ email, password }).then((resolve) => {
        resolve ? 
        history.push('/settings'): 
        history.push('/signIn');
      });
    },
    validationSchema: Yup.object().shape({
      email: emailValidation(),
      password: passwordValidation()
    })
  });

  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <Form imgSrc={diary} title='Sign In' onSubmit={handleSubmit}>
      <Input 
          id='email'
          name='email'
          type='text'
          onChange={handleChange}
          value={values.email}
          text='Email'
        />
        <Error touched={touched.email} errors={errors.email}/>

        <Input 
          id='password'
          name='password'
          type='password'
          onChange={handleChange}
          value={values.password}
          text='Password'
        />
        <Error touched={touched.password} errors={errors.password}/>

        <Link className={linkStyles.link} to='/forgotPassword'>Forgot password?</Link>

        <Button text='Sign In'/>
        
        <Link className={linkStyles.link} to='/signUp'>New to Diary?  Create an account!</Link>
    </Form>
  );
}

export default SignInForm;
