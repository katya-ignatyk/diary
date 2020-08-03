import { Action } from 'redux';
import { useHistory } from 'react-router-dom';
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