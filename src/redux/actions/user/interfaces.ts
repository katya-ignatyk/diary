import { Action } from 'redux';
import { IAction } from '../../../interfaces';
import { UserActionTypes } from '../../reducers/user/interfaces';

export type ISaveUser = IAction<UserActionTypes.SAVE_USER_DATA, IReduxUserData>
export type IAuthUser = Action<UserActionTypes.AUTH_USER>
export type IAuthError = Action<UserActionTypes.AUTH_ERROR>

export interface IReduxUserData {
  id : number;
  email : string;
  username : string;
}

export interface IUserRegistrationData {
  username : string;
  email : string;
  password : string;
}

export interface IUserAuthData {
  email : string;
  password : string;
}