import React from 'react';
import { useFormik } from 'formik';
import Button from '../../../containers/ButtonContainer';
import Error from '../../shared/Form/Error';
import Input from '../../shared/Form/Input';
import styles from './styles.css';
import { profileValidationSchema } from '../../../validation';
import { SettingsLayout } from '../../../layouts/SettingsLayout';
import { IProfileReduxProps } from './interfaces';
import Avatar from '../../../containers/AvatarContainer';

function ProfileForm(props : IProfileReduxProps) {
  const { 
      id, 
      girl_name, 
      girl_age, 
      boy_name, 
      boy_age,
      updateProfile
  } = props;

  const formik = useFormik({
    initialValues: {
      girl_name,
      girl_age,
      boy_name,
      boy_age,
    },
    enableReinitialize: true,
    onSubmit: values => {
      const { girl_name, girl_age, boy_name, boy_age } = values;

      updateProfile({ 
        id,
        girl_name, 
        girl_age, 
        boy_name, 
        boy_age,
      });
    },
    validationSchema: profileValidationSchema()
  });

  const { handleChange, handleSubmit, values, touched, errors } = formik;

  return (
    <SettingsLayout>
      <Avatar />
      <form className={styles.form} onSubmit={handleSubmit}>        
        <Input 
          id='girl_name'
          name='girl_name'
          type='text'
          onChange={handleChange}
          value={values.girl_name}
          text='Girl name'
        />
        <Error touched={touched.girl_name} errors={errors.girl_name}/>

        <Input 
          id='girl_age'
          name='girl_age'
          type='number'
          onChange={handleChange}
          value={values.girl_age}
          text='Girl age'
        />
        <Error touched={touched.girl_age} errors={errors.girl_age}/>
        
        <Input 
          id='boy_name'
          name='boy_name'
          type='text'
          onChange={handleChange}
          value={values.boy_name}
          text='Boy name'
        />
        <Error touched={touched.boy_name} errors={errors.boy_name}/>
        
        <Input 
          id='boy_age'
          name='boy_age'
          type='number'
          onChange={handleChange}
          value={values.boy_age}
          text='Boy age'
        />
        <Error touched={touched.boy_age} errors={errors.boy_age}/>

        <Button text='Save changes'/>
      </form>
    </SettingsLayout>
  );
}

export default ProfileForm;