import * as React from 'react';
import * as Yup from 'yup';
import queryString from 'query-string';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import diaryForResetPassword from '../../../assets/img/diaryForResetPassword.jpg';
import Button from '../../../containers/ButtonContainer';
import Input from '../../shared/Form/Input';
import Error from '../../shared/Form/Error';
import Form from '../../shared/Form';
import { IResetPasswordReduxProps } from './interfaces';
import { passwordValidation, confirmPasswordValidation } from '../../../validation';

function ResetPasswordForm(props : IResetPasswordReduxProps) {
  const { resetPassword } = props;
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

      resetPassword(password, token).then((resolved : boolean) => {
        typeof(resolved) === 'string' ? 
        history.push('/forgotPassword') : 
        history.push('/signIn');
      });
    },
    validationSchema: Yup.object().shape({
      password: passwordValidation(),
      confirmPassword: confirmPasswordValidation()
    })
  });
  
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <Form imgSrc={diaryForResetPassword} title='Reset password' onSubmit={handleSubmit}>
      <Input 
          id='password'
          name='password'
          type='password'
          onChange={handleChange}
          value={values.password}
          text='Password'
        />
      <Error touched={touched.password} errors={errors.password}/>

      <Input 
          id='confirm_password'
          name='confirmPassword'
          type='password'
          onChange={handleChange}
          value={values.confirmPassword}
          text='Password'
        />
      <Error touched={touched.confirmPassword} errors={errors.confirmPassword}/>
      
      <Button text='Reset password' />
    </Form>
    
  );
}

export default ResetPasswordForm;
