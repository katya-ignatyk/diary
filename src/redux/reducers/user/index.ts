import { ActionType } from 'typesafe-actions';
import { saveUser, authUser,authError } from '../../actions/user';
import { IUserState } from './interfaces';
import { UserActionTypes } from './interfaces';

type IUserAction = ActionType<typeof saveUser | typeof authUser | typeof authError>

const initialState : IUserState = {
  email: '', 
  username: '',
  isLoading: false,
  isErrors: false,
};

export const userReducer = (state = initialState, action : IUserAction) => {
  switch (action.type) {
    case UserActionTypes.SAVE_USER_DATA: {
      return {
        ...state, username: action.payload.username, email: action.payload.email
      };
    }

    case UserActionTypes.AUTH_USER: {
      return {
        ...state, isErrors: false, isLoading: true
      };
    }

    case UserActionTypes.AUTH_ERROR: {
      return {
          ...state, isErrors: true, isLoading: false
      };
    }
  
    default: return state;
  }
};