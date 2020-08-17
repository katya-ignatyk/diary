import * as Yup from 'yup';

export function emailValidation() {
  return Yup.string().email('Email is invalid').required('Email is required');
}

export function usernameValidation() {
  return Yup.string().min(3, 'Username must be at least 3 characters').max(20).required('Username is required');
};

export function passwordValidation() {
  return Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required');
}

export function confirmPasswordValidation() {
  return Yup.string().required('Password is required').oneOf([Yup.ref('password')], 'Passwords do not match');
}

export function profileValidationSchema() {
  return Yup.object().shape({
    girl_age: Yup.number().required('Age is required'),
    boy_age: Yup.number().required('Age is required'),
    girl_name: Yup.string().required('Name is required'),
    boy_name: Yup.string().required('Name is required')
  });
}