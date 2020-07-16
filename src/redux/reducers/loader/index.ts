import { ActionType } from 'typesafe-actions';
import * as actions from '../../actions/loader';
import { LoaderActionTypes } from './interfaces';

type ILoader = ActionType<typeof actions>

const initialState = {
  isLoaderActive: false
};

export default function LoaderReducer (state = initialState, action : ILoader) {
  switch (action.type) {
    case LoaderActionTypes.START_LOADER: {
      return {
        ...state, isLoaderActive: true
      };
    }
    case LoaderActionTypes.STOP_LOADER: {
      return {
        ...state, isLoaderActive: false
      };
    }
    default: return state;
  }
};