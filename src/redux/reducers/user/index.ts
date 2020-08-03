import { ActionType } from 'typesafe-actions';
import { saveUser as actions } from '../../actions/user';
import { IUserState } from './interfaces';
import { UserActionTypes } from './interfaces';

type IUserAction = ActionType<typeof actions>
const initialState : IUserState = {
  email: '',
  username: ''
};

export const userReducer = (state = initialState, action : IUserAction) => {
  switch (action.type) {
    case UserActionTypes.SAVE_USER_DATA: {
      return {
        ...state, username: action.payload.username, email: action.payload.email
      };
    }
  
    default: return state;
  }
};