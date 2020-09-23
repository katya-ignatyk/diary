import { ISaveProfile, ISaveProfileData, IUpdateProfileAvatar, IDeleteProfileAvatar } from '../../actions/profile/interfaces';
import { IProfileActionTypes, IProfileState } from './interfaces';

type IProfileAction = ISaveProfile | ISaveProfileData | IUpdateProfileAvatar | IDeleteProfileAvatar;

const initialState : IProfileState = {
  id: 0,
  girl_name: '',
  girl_age: null,
  boy_name: '',
  boy_age: null,
  avatarUrl: ''
};

export const profileReducer = (state = initialState, action : IProfileAction) => {
  switch (action.type) {
    case IProfileActionTypes.SAVE_PROFILE: {
      const { id, girl_name, girl_age, boy_name, boy_age, avatarUrl } = action.payload;

      return {
        ...state,
        id,
        girl_name, 
        girl_age, 
        boy_name, 
        boy_age,
        avatarUrl
      };
    }

    case IProfileActionTypes.SAVE_PROFILE_DATA: {
      const { id, girl_name, girl_age, boy_name, boy_age } = action.payload;

      return {
        ...state,
        id,
        girl_name, 
        girl_age, 
        boy_name, 
        boy_age,
      };
    }

    case IProfileActionTypes.UPDATE_PROFILE_AVATAR: {
      const { avatarUrl } = action.payload;
      
      return {
        ...state,
        avatarUrl
      };
    }      
      
    default:
      return state;
  }
};