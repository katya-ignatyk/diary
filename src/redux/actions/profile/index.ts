import { Dispatch } from 'redux';
import { config } from '../../../env';
import { startLoader, stopLoader } from '../loader';
import { ProfileService } from '../../../services/profileService';
import { IProfileState, IProfileData } from './interfaces';
import { IProfileActionTypes, ISaveProfile } from '../../reducers/profile/interfaces';
import { authUser } from '../user';
import { sendNotification } from '../notifications';

export const saveProfile = (profile : IProfileState) : ISaveProfile => {
  return {
    type: IProfileActionTypes.SAVE_PROFILE,
    payload: profile,
  };
};

export const isProfileExists = (id : number) => async(dispatch : Dispatch) => {
  dispatch(startLoader());
  dispatch(authUser());
  
  try {
    const response = await ProfileService.Instance.profileExists(`${config.BE_URL}/profileExists`, { id });

    dispatch(saveProfile(response.data.profile));
    dispatch(stopLoader());
    
    return true;

  } catch (error) {
    dispatch(stopLoader());

    return false;
  };
};

export const sendProfile = (profileData : IProfileData) => async(dispatch : Dispatch) => {
  dispatch(startLoader());
  try { 
    const response = await ProfileService.Instance.saveProfileChanges(`${config.BE_URL}/saveProfileChanges`, profileData);
    dispatch(saveProfile(response.data.profile));
  } catch (error) {
    dispatch(sendNotification({
      severity: 'error',
      message: error.response.data.message,
      time: 2000
    }));
  }
  dispatch(stopLoader());
};