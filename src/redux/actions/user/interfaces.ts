import { Action } from 'redux';
import { IAction } from '../../../interfaces';
import { UserActionTypes } from '../../reducers/user/interfaces';

export type ISaveUser = IAction<UserActionTypes.SAVE_USER_DATA, IUserData>
export type IAuthUser = Action<UserActionTypes.AUTH_USER>
export type IAuthError = Action<UserActionTypes.AUTH_ERROR>

export interface IUserData {
  id : number;
  email : string;
  username : string;
}