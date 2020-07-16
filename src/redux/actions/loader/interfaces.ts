import { Action } from 'redux';
import { LoaderActionTypes } from '../../reducers/loader/interfaces';

export type IStartLoader = Action<LoaderActionTypes.START_LOADER>
export type IStopLoader = Action<LoaderActionTypes.STOP_LOADER>