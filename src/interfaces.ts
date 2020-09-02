import { Action } from 'redux';
import { INotificationState } from './redux/reducers/notifications/interfaces';
import { ILoaderState } from './redux/reducers/loader/interfaces';
import { IUserState } from 'redux/reducers/user/interfaces';
import { IProfileState } from 'redux/reducers/profile/interfaces';

export interface IAction<T, S> extends Action<T> {
  payload : S;
}

export interface IRootState {
  notifications : INotificationState[];
  loader : ILoaderState;
  user : IUserState;
  profile : IProfileState;
}

export enum CustomErrors {
  REFRESH_EXPIRED = 'REFRESH_EXPIRED',
  ACCESS_EXPIRED = 'ACCESS_EXPIRED',
  DEFAULT_EXPIRED = 'DEFAULT_EXPIRED',
  JWT_ERROR = 'JWT_ERROR',
  PROFILE_NOT_FOUND = 'PROFILE_NOT_FOUND'
}