import { Dispatch } from 'redux';
import { StorageService, UserService } from '../../../services';
import { IUserRegistrationData } from './interfaces';
import { IUserAuthData } from './interfaces';
import { UserActionTypes } from '../../reducers/user/interfaces';
import { sendNotification } from '../notifications';
import { stopLoader, startLoader } from '../loader';
import { config } from '../../../env';
import { ISaveUser, IReduxUserData, IAuthUser, IAuthError } from './interfaces';
import { CustomErrors } from '../../../interfaces';
import { saveProfile } from '../profile';

export const saveUser = (userData : IReduxUserData) : ISaveUser => {
  return {
    type: UserActionTypes.SAVE_USER_DATA,
    payload: userData
  };
}; 

export const authUser = () : IAuthUser => {
  return {
    type: UserActionTypes.AUTH_USER
  };
};

export const authError = () : IAuthError => {
  return {
    type: UserActionTypes.AUTH_ERROR
  };
};

//sign up 

export const signUp = (userData : IUserRegistrationData) => async(dispatch : Dispatch) => {
  dispatch(startLoader());

  try {

    const response = await UserService.Instance.signUp(`${config.BE_URL}/signUp`, userData);

    dispatch(sendNotification({ 
      severity: 'success', 
      message: response.data.message, 
      time: 4000 
    }));

  } catch (error) {

    dispatch(sendNotification({ 
      severity: 'error' , 
      message: error.response.data.message, 
      time: 4000 
    }));

  }

  dispatch(stopLoader());
};

export const verifySignUp = (token : string) => async(dispatch : Dispatch) => {
  dispatch(startLoader());

  try {
    
    const response = await UserService.Instance.verifySignUp(`${config.BE_URL}/signUp/verify`, { token });
    const respBody = response.data;

    dispatch(sendNotification({ 
      severity: 'success', 
      message: respBody.message, 
      time: 4000 
    }));

    dispatch(saveUser(respBody.user));

    StorageService.setAccessToken(respBody.accessToken);
    StorageService.setRefreshToken(respBody.refreshToken);

    return true;

  } catch (error) {

    const err = error.response;

    if (err.data.code === CustomErrors.DEFAULT_EXPIRED) {
      dispatch(stopLoader());

      dispatch(sendNotification({ 
        severity: 'error', 
        message: err.data.message, 
        time: 4000 
      }));

      return err.data.message;
    }

    dispatch(sendNotification({ 
      severity: 'error', 
      message: err.data.message, 
      time: 4000 
    }));
  }

  dispatch(stopLoader());
};

//sign in

export const signIn = (userData : IUserAuthData) => async(dispatch : Dispatch) => {
  dispatch(startLoader());

  try {
    const response = await UserService.Instance.signIn(`${config.BE_URL}/signIn`, userData);
    const respBody = response.data;

    StorageService.setAccessToken(respBody.accessToken);
    StorageService.setRefreshToken(respBody.refreshToken);

    dispatch(saveUser(respBody.user));
    dispatch(saveProfile(respBody.profile));
    dispatch(authUser());
    dispatch(stopLoader());
    dispatch(sendNotification({ 
      severity: 'success', 
      message: respBody.message, 
      time: 4000 
    }));

    return true;

  } catch (error) {

    dispatch(stopLoader());
    dispatch(sendNotification({ 
      severity: 'error', 
      message: error.response.data.message, 
      time: 4000 
    }));
  }
};

//forgot password

export const sendForgotPasswordEmail = (email : string) => async(dispatch : Dispatch) => {
  dispatch(startLoader());

  try {
    const response = await UserService.Instance.sendEmail(`${config.BE_URL}/signIn/forgotPassword`, { email });

    dispatch(sendNotification({ 
      severity: 'success', 
      message: response.data.message, 
      time: 4000 
    }));

  } catch (error) {

    dispatch(sendNotification({ 
      severity: 'error', 
      message: error.response.data.message, 
      time: 4000 
    }));
  }

  dispatch(stopLoader());
};

//reset password

export const resetPassword = (password : string, token : string) => async(dispatch : Dispatch) => {
  dispatch(startLoader());
  
  try {
    const response = await UserService.Instance.resetPassword(`${config.BE_URL}/signIn/resetPassword`, { password, token });

    dispatch(stopLoader());
    dispatch(sendNotification({ 
      severity: 'success', 
      message: response.data.message, 
      time: 4000 
    }));

  } catch (error) {

    const err = error.response;

    dispatch(stopLoader());
    dispatch(sendNotification({ 
      severity: 'error', 
      message: `${err.data.message}! Try to reset password again`, 
      time: 4000 
    }));

    return err.data.message;
  }
};

//fetch user to check tokens

export const fetchUser = () => async(dispatch : Dispatch) => {
  dispatch(startLoader());

  try {
    const accessToken = StorageService.getAccessToken();

    if (!accessToken) {
      dispatch(authError());
      dispatch(stopLoader());
      return;
    }

    const response = await UserService.Instance.fetchUser(`${config.BE_URL}/user`, { accessToken });

    dispatch(authUser());
    dispatch(saveUser(response.data.user));
    dispatch(saveProfile(response.data.profile));
    dispatch(stopLoader());

  } catch (error) {

    if (error.response.data.code === CustomErrors.ACCESS_EXPIRED) {

      dispatch(authError());

      try {

        const refreshToken = StorageService.getRefreshToken();
        const response = await UserService.Instance.auth(`${config.BE_URL}/auth`, { refreshToken });

        dispatch(authUser());
        dispatch(saveUser(response.data.user));    
        dispatch(saveProfile(response.data.profile));

        StorageService.setAccessToken(response.data.updatedAccessToken);
        StorageService.setRefreshToken(response.data.updatedRefreshToken);

      } catch (error) {
        return false;
      }

      dispatch(stopLoader());
    }
  }
};