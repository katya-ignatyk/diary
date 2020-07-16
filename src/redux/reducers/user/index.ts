import { ActionType } from 'typesafe-actions';
import * as actions from '../../actions/user';
import { UserRegistrationActionTypes } from './interfaces';

type IUserRegistrationActions = ActionType<typeof actions>

const initialState = {
  isVerifyEmailSend: false,
  isEmailExists: false,
  isLoaderActive: false
}


export default function UserReducer(state = initialState, action: IUserRegistrationActions) {
  switch (action.type) {
    case UserRegistrationActionTypes.SEND_VERIFY_EMAIL: {
      return { ...state, isVerifyEmailSend: true, isEmailExists: false }
    }
    case UserRegistrationActionTypes.SEND_ERROR: {
      return {
        ...state, isEmailExists: true, isLoaderActive: false
      }
    }
    case UserRegistrationActionTypes.START_LOADER: {
      return {
        ...state, isLoaderActive: true
      }
    }
    case UserRegistrationActionTypes.STOP_LOADER: {
      return {
        ...state, isLoaderActive: false
      }
    }
    default: return state
  }
}