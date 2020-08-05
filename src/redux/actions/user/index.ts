import { Dispatch } from 'redux';
import { UserService } from '../../../services/userService';
import { StorageService } from '../../../services/storageService';
import { IUserRegistrationData } from '../../../components/SignUpForm/interfaces';
import { IUserAuthData } from '../../../components/SignInForm/interfaces';
import { UserActionTypes } from '../../reducers/user/interfaces';
import { sendNotification } from '../notifications';
import { stopLoader, startLoader } from '../loader';
import { config } from '../../../env';
import { ISaveUser, IUserData, IAuthUser, IAuthError, IStartLoading } from './interfaces';
import { CustomErrors } from '../../../interfaces';

export const saveUser = (userData : IUserData) : ISaveUser => {
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

  try {
    const response = await UserService.Instance.sendUserDataToSignUp(`${config.BE_URL}/signUp`, userData);
    dispatch(sendNotification({ severity: 'success' , message: response.data.message, time: 2000 }));
    dispatch(stopLoader());
    return true;
  } catch (error) {
    dispatch(sendNotification({ severity: 'error' , message: error.response.data.message, time: 2000 }));
    dispatch(stopLoader());
  }

};

export const verifyUser = (token : string) => async(dispatch : Dispatch) => {
  try {
    const response = await UserService.Instance.verifyTokenToSignUp(`${config.BE_URL}/signUp/verify`, { token });
    const respBody = response.data;
    dispatch(stopLoader());
    dispatch(sendNotification({ severity: 'success' , message: respBody.message, time: 2000 }));
    dispatch(saveUser(respBody.user));
    StorageService.setAccessToken(respBody.accessToken);
    StorageService.setRefreshToken(respBody.refreshToken);
    return true;
  } catch (error) {
    const err = error.response;
    dispatch(stopLoader());

    if (err.data.code === CustomErrors.default_expiried) {
      dispatch(sendNotification({ severity: 'error' , message: err.data.message, time: 2000 }));
      return err.data.message;
    }
    dispatch(sendNotification({ severity: 'error' , message: err.data.message, time: 2000 }));
    return null;
  }
};

//sign in

export const signIn = (userData : IUserAuthData) => async(dispatch : Dispatch) => {
  try {
    const response = await UserService.Instance.sendUserDataToSignIn(`${config.BE_URL}/signIn`, userData);
    const respBody = response.data;
    StorageService.setAccessToken(respBody.accessToken);
    StorageService.setRefreshToken(respBody.refreshToken);
    dispatch(stopLoader());
    dispatch(sendNotification({ severity: 'success', message: respBody.message, time: 2000 }));
    return true;

  } catch (error) {
    dispatch(stopLoader());
    dispatch(sendNotification({ severity: 'error', message: error.response.data.message, time: 2000 }));
    return null;
  }
};

//forgot password

export const sendEmail = (email : string) => async(dispatch : Dispatch) => {

  try {
    const response = await UserService.Instance.sendEmail(`${config.BE_URL}/forgotPassword`, { email });
    dispatch(stopLoader());
    dispatch(sendNotification({ severity: 'success', message: response.data.message, time: 2000 }));
    return true;
  } catch (error) {
    dispatch(stopLoader());
    dispatch(sendNotification({ severity: 'error', message: error.response.data.message, time: 2000 }));
    return null;
  }
};

//reset password

export const resetPassword = (password : string, token : string) => async(dispatch : Dispatch) => {
  try {
    const response = await UserService.Instance.resetPassword(`${config.BE_URL}/resetPassword`, { password, token });
    dispatch(stopLoader());
    dispatch(sendNotification({ severity: 'success', message: response.data.message, time: 2000 }));
    return true;
  } catch (error) {
    const err = error.response;
    dispatch(stopLoader());
    dispatch(sendNotification({ severity: 'error', message: `${err.data.message}! Try to reset password again`, time: 2000 }));
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
    const response = await UserService.Instance.verifyAccessToken(`${config.BE_URL}/fetchUser`, { accessToken });
    dispatch(authUser());
    dispatch(stopLoader());
    return;
  } catch (error) {
    dispatch(authError());
    dispatch(stopLoader());

    if (error.response.data.code === CustomErrors.access_expiried) {
      dispatch(authError());
      dispatch(stopLoader());
      try {
        const refreshToken = StorageService.getRefreshToken();
        const response = await UserService.Instance.refreshTokens(`${config.BE_URL}/refreshAccessToken`, { refreshToken });
        dispatch(authUser());
        StorageService.setAccessToken(response.data.newAccessToken);
        StorageService.setRefreshToken(response.data.newRefreshToken);
        return;
      } catch (error) {
        dispatch(authError());
        dispatch(stopLoader());
        return;
      }
    }

    return;
  }
};