import { Action } from 'redux';
import { INotificationState } from './redux/reducers/notifications/interfaces';
import { ILoaderState } from './redux/reducers/loader/interfaces';

export interface IAction<T, S> extends Action<T> {
  payload : S;
}

export interface IRootState {
  notifications : INotificationState[]
  loader : ILoaderState
}
