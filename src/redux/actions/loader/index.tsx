import { LoaderActionTypes } from '../../reducers/loader/interfaces';
import { IStartLoader, IStopLoader } from './interfaces';


export const startLoader = () : IStartLoader => {
  return {
    type: LoaderActionTypes.START_LOADER,
  };
};

export const stopLoader = () : IStopLoader => {
  return {
    type: LoaderActionTypes.STOP_LOADER,
  };
};