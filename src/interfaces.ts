import { Action } from 'redux';
import { INotificationState } from './redux/reducers/notifications/interfaces';
import { ILoaderState } from './redux/reducers/loader/interfaces';
import { IUserState } from 'redux/reducers/user/interfaces';

export interface IAction<T, S> extends Action<T> {
  payload : S;
}

export interface IRootState {
  notifications : INotificationState[];
  loader : ILoaderState;
  user : IUserState;
}

export enum CustomErrors {
  refresh_expiried = 'refresh_expiired',
  access_expiried = 'access_expiried',
  default_expiried = 'default_expiried',
  jwt_error = 'jwt_error',
}