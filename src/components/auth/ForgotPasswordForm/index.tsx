import * as React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import newspaper from '../../../assets/img/newspaper.jpg';
import linkStyles from '../../../scss/link/styles.css';
import Button from '../../../containers/ButtonContainer';
import Input from '../../shared/Form/Input';
import Error from '../../shared/Form/Error';
import Form from '../../shared/Form';
import { IForgotPasswordReduxProps } from './interfaces';
import { emailValidation } from '../../../validation';

function ForgotPasswordForm(props : IForgotPasswordReduxProps) {
  const { sendForgotPasswordEmail } = props;

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: values => {
      const { email } = values;
      sendForgotPasswordEmail(email);
    },
    validationSchema: Yup.object().shape({
      email: emailValidation()
    })
  });

  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <Form imgSrc={newspaper} title='Forgot password' onSubmit={handleSubmit}>
      <Input 
      id='email'
      name='email'
      type='email'
      onChange={handleChange}
      value={values.email}
      text='Email'
      />
      <Error touched={touched.email} errors={errors.email}/>
      
      <Button text='Send email'/>

      <Link className={linkStyles.form__link} to='/signIn'>Back to sign in</Link>
    </Form>
  );
}

export default ForgotPasswordForm;
