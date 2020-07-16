import { Dispatch } from 'redux';
import { UserService } from '../../../services/userService';
import { IUser } from '../../../components/SignUpForm/interfaces';
import { ISendError, ISendVerifyEmail, IStartLoader, IStopLoader } from './interfaces';
import { UserRegistrationActionTypes } from '../../reducers/user/interfaces';

export const sendVerifyEmail = (): ISendVerifyEmail => {
  return {
    type: UserRegistrationActionTypes.SEND_VERIFY_EMAIL
  }
}

export const sendError = (): ISendError => {
  return {
    type: UserRegistrationActionTypes.SEND_ERROR
  }
}

export const startLoader = (): IStartLoader => {
  return {
    type: UserRegistrationActionTypes.START_LOADER
  }
}

export const stopLoader = (): IStopLoader => {
  return {
    type: UserRegistrationActionTypes.STOP_LOADER
  }
}


export const fetchUser = (userData: IUser) => async (dispatch: Dispatch) => {
  console.log(userData);
  const response = await UserService.Instance.sendUserData('http://localhost:3001/signUp', userData);
  const status = await response.status;
  const message = (await response.json()).message;
  console.log(await message);
  if (status === 201) {
    dispatch(sendVerifyEmail());
  }
  if (status === 409) {
    dispatch(sendError())
  }
};