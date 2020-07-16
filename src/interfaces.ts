import { Action } from 'redux';
import { IUserRegistrationState } from './redux/reducers/user/interfaces';

export interface IAction<T, S> extends Action<T> {
  payload: S
}

export interface IRootState {
  user: IUserRegistrationState
}