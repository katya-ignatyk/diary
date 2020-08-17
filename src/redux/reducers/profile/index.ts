import { ActionType } from 'typesafe-actions';
import { IProfileActionTypes } from './interfaces';
import { saveProfile } from '../../actions/profile';
import { IProfileState } from 'redux/actions/profile/interfaces';

type IProfileAction = ActionType<typeof saveProfile>;

const initialState : IProfileState = {
  id: 0,
  girl_name: '',
  girl_age: null,
  boy_name: '',
  boy_age: null
};

export const profileReducer = (state = initialState, action : IProfileAction) => {
  switch (action.type) {
    case IProfileActionTypes.SAVE_PROFILE: {
      const { id, girl_name, girl_age, boy_name, boy_age } = action.payload;
      return {
        ...state,
        id,
        girl_name, 
        girl_age, 
        boy_name, 
        boy_age
      };
    }
      
    default:
      return state;
  }
};