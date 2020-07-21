import { Dispatch } from 'redux';
import { UserService } from '../../../services/userService';
import { IUserRegistrationData } from '../../../components/SignUpForm/interfaces';
import { sendSuccessNotification, sendErrorNotification } from '../notifications';
import { stopLoader } from '../loader';
import { config } from '../../../env';

export const fetchUser = (userData : IUserRegistrationData) => async(dispatch : Dispatch) => {
  const response = await UserService.Instance.sendUserData(`${config.BE_URL}/signUp`, userData);
  const status = await response.status;
  const jsonResponse = await response.json();

  if (status === 201) {
    dispatch(stopLoader());
    dispatch(sendSuccessNotification(jsonResponse.message));
  }
  if (status === 409 || status === 400) {
    dispatch(stopLoader());
    dispatch(sendErrorNotification(jsonResponse.message));
  }
  return response;
};

export const verifyUser = (token : string) => async(dispatch : Dispatch) => {
  const response = await UserService.Instance.verifyAccessToken(`${config.BE_URL}/signUp/verify`, { token });
  const jsonResponse = await response.json();
  dispatch(sendErrorNotification(jsonResponse.message));
};
