import { Dispatch } from 'redux';
import { UserService } from '../../../services/userService';
import { StorageService } from '../../../services/storageService';
import { IUserRegistrationData } from '../../../components/SignUpForm/interfaces';
import { IUserAuthData } from '../../../components/SignInForm/interfaces';
import { UserActionTypes } from '../../reducers/user/interfaces';
import { sendNotification } from '../notifications';
import { stopLoader } from '../loader';
import { config } from '../../../env';
import { ISaveUser } from './interfaces';
import { IUserState } from '../../reducers/user/interfaces';

export const saveUser = (userData : IUserState) : ISaveUser => {
  return {
    type: UserActionTypes.SAVE_USER_DATA,
    payload: userData
  };
};

//sign up 

export const signUp = (userData : IUserRegistrationData) => async(dispatch : Dispatch) => {

  try {
    const response = await UserService.Instance.sendUserData(`${config.BE_URL}/signUp`, userData);
    // const status = await response.status;
    // const jsonResponse = await response.json();
    console.log("object");
    dispatch(stopLoader());
  } catch (error) {
    console.log(error + "erroryyyyyyyyyyyyyyyyyy");
  }

  // if (status !== 201) {
  //   dispatch(sendNotification({ severity: 'error' , message: jsonResponse.message, time: 1000 }));
  //   return null;
  // }

  // dispatch(sendNotification({ severity: 'success' , message: jsonResponse.message, time: 1000 })); 
  return null;
};

export const verifyUser = (token : string) => async(dispatch : Dispatch) => {
  const response = await UserService.Instance.sendToken(`${config.BE_URL}/signUp/verify`, { token });
  const status = await response.status;
  const jsonResponse = await response.json();
  dispatch(stopLoader());

  if (status === 401) {
    dispatch(sendNotification({ severity: 'error' , message: jsonResponse.message, time: 1000 }));
    return jsonResponse.message;
  }
  
  if (status !== 200) {
    dispatch(sendNotification({ severity: 'error' , message: jsonResponse.message, time: 1000 }));
    return null;
  }

  dispatch(sendNotification({ severity: 'success' , message: jsonResponse.message, time: 1000 }));
  dispatch(saveUser(jsonResponse.user));
  StorageService.setAccessToken(jsonResponse.accessToken);
  StorageService.setRefreshToken(jsonResponse.refreshToken);
  return true;
};

//sign in

export const signIn = (userData : IUserAuthData) => async(dispatch : Dispatch) => {
  const response = await UserService.Instance.sendUserData(`${config.BE_URL}/signIn`, userData);
  const status = response.status;
  const jsonResponse = await response.json();
  dispatch(stopLoader());

  if (status !== 201) {
    console.log(status);
    dispatch(sendNotification({ severity: 'error', message: jsonResponse.message, time: 1000 }));
    return null;
  }
  dispatch(sendNotification({ severity: 'success', message: jsonResponse.message, time: 1000 }));
  StorageService.setAccessToken(jsonResponse.user.accessToken);
  StorageService.setRefreshToken(jsonResponse.user.refreshToken);
  return true;
  
};

//forgot password

export const sendEmail = (email : string) => async(dispatch : Dispatch) => {
  const response = await UserService.Instance.sendEmail(`${config.BE_URL}/forgotPassword`, { email });
  const status = response.status;
  const jsonResponse = await response.json();
  dispatch(stopLoader());

  if (status !== 200) {
    console.log(jsonResponse);
    dispatch(sendNotification({ severity: 'error', message: jsonResponse.message, time: 1000 }));
    return null;
  }
  dispatch(sendNotification({ severity: 'success', message: jsonResponse.message, time: 1000 }));
  return true;
};

//reset password

export const resetPassword = (password : string, token : string) => async(dispatch : Dispatch) => {
  const response = await UserService.Instance.resetPassword(`${config.BE_URL}/resetPassword`, { password, token });
  const status = response.status;
  const jsonResponse = await response.json();
  dispatch(stopLoader());

  if (status !== 200) {
    dispatch(sendNotification({ severity: 'error', message: jsonResponse.message, time: 1000 }));
    return null;
  }
  dispatch(sendNotification({ severity: 'success', message: jsonResponse.message, time: 1000 }));
  return true;
  
};

//fetch user to check tokens

export const fetchUser = (token : string) => async(dispatch : Dispatch) => {
  const response = await UserService.Instance.sendToken(`${config.BE_URL}/fetchUser`, { token });
  const status = response.status;

  if (status === 401) {
    const token = StorageService.getRefreshToken();
    const response = await UserService.Instance.sendToken(`${config.BE_URL}/refreshAccessToken`, { token });
  }
};