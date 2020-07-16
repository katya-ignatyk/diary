import { Action } from 'redux';
import { IAction } from '../../../interfaces';
import { UserRegistrationActionTypes } from '../../reducers/user/interfaces';

export type ISendError = Action<UserRegistrationActionTypes.SEND_ERROR>;
export type ISendVerifyEmail = Action<UserRegistrationActionTypes.SEND_VERIFY_EMAIL>
export type IStartLoader = Action<UserRegistrationActionTypes.START_LOADER>
export type IStopLoader = Action<UserRegistrationActionTypes.STOP_LOADER>