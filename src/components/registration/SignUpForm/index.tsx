import * as React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import diary from '../../../assets/img/diaryForSignUp.jpg';
import linkStyles from '../../../scss/common/link/styles.css';
import Button from '../../../containers/ButtonContainer';
import Input from '../../shared/Form/Input';
import Error from '../../shared/Form/Error';
import Form from '../../shared/Form';
import { IUserRegistrationReduxProps } from './interfaces';
import { usernameValidation, emailValidation, passwordValidation } from '../../../validation';

function SignUpForm(props : IUserRegistrationReduxProps) {
  const { signUp } = props;
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      const { username, email, password } = values;
      signUp({ username, email, password });
    },
    validationSchema: Yup.object().shape({
      username: usernameValidation(),
      email: emailValidation(),
      password: passwordValidation()
    })
  });
  const { handleSubmit, handleChange, values, touched, errors } = formik;
  return (
    <Form imgSrc={diary} title='Sign Up' onSubmit={handleSubmit}>
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
        id='username'
        name='username'
        type='text'
        onChange={handleChange}
        value={values.username}
        text='Username'
      />
      <Error touched={touched.username} errors={errors.username}/>

      <Input 
        id='password'
        name='password'
        type='password'
        onChange={handleChange}
        value={values.password}
        text='Password'
      />
      <Error touched={touched.password} errors={errors.password}/>

      <Button text='Sign Up'/>

      <Link className={linkStyles.link} to='/signIn'>Arleady registered? Sign In!</Link>

    </Form>
  );
}

export default SignUpForm;
