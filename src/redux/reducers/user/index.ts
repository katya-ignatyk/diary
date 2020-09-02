import { IUserState } from './interfaces';
import { UserActionTypes } from './interfaces';
import { ISaveUser, IAuthError, IAuthUser } from 'redux/actions/user/interfaces';

type IUserAction = ISaveUser | IAuthError | IAuthUser;

const initialState : IUserState = {
  id: 0,
  email: '', 
  username: '',
  isLoaded: false,
  isErrors: false,
};

export const userReducer = (state = initialState, action : IUserAction) => {
  switch (action.type) {
    case UserActionTypes.SAVE_USER_DATA: {
      const { id , username, email } = action.payload;
      
      return {
        ...state, 
        id ,
        username,
        email,
        isErrors: false
      };
    }

    case UserActionTypes.AUTH_USER: {
      return {
        ...state, 
        isErrors: false, 
        isLoaded: true
      };
    }

    case UserActionTypes.AUTH_ERROR: {
      return {
          ...state, 
          isErrors: true, 
          isLoaded: false
      };
    }
  
    default: return state;
  }
};