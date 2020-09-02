import { Dispatch } from 'redux';
import { config } from '../../../env';
import { startLoader, stopLoader } from '../loader';
import { ProfileService } from '../../../services/profileService';
import { IProfileData, IAvatar, ISaveProfile, ISaveProfileData, IUpdateProfileAvatar, IDeleteProfileAvatar } from './interfaces';
import { IProfileActionTypes, IProfileState } from '../../reducers/profile/interfaces';
import { sendNotification } from '../notifications';

export const saveProfile = (profile : IProfileState) : ISaveProfile => {
  return {
    type: IProfileActionTypes.SAVE_PROFILE,
    payload: profile,
  };
};

export const saveProfileData = (profile : IProfileData) : ISaveProfileData => {
  return {
    type: IProfileActionTypes.SAVE_PROFILE_DATA,
    payload: profile,
  };
};

export const updateProfileAvatar = (avatar : IAvatar) : IUpdateProfileAvatar => {
  return {
    type: IProfileActionTypes.UPDATE_PROFILE_AVATAR,
    payload: avatar,
  };
};

export const deleteProfileAvatar = (avatar : IAvatar) : IDeleteProfileAvatar => {
  return {
    type: IProfileActionTypes.UPDATE_PROFILE_AVATAR,
    payload: avatar,
  };
};

export const updateProfile = (profile : IProfileData) => async(dispatch : Dispatch) => {
  dispatch(startLoader());

  try { 

    const response = await ProfileService.Instance.updateProfile(`${config.BE_URL}/profile`, profile);
    dispatch(saveProfileData(response.data));

    dispatch(sendNotification({
      severity: 'success',
      time: 2000,
      message: 'Success! Your changes are saved!'
    }));

  } catch (error) {

    dispatch(sendNotification({
      severity: 'error',
      message: error.response.data.message,
      time: 2000
    }));

  }

  dispatch(stopLoader());
};

export const updateAvatar = (image : FormData) => async(dispatch : Dispatch) => {
  dispatch(startLoader());

  try {
    
    const response = await ProfileService.Instance.updateAvatar(`${config.BE_URL}/profile/avatar`, image);
    dispatch(updateProfileAvatar(response.data));
    
    dispatch(sendNotification({
      severity: 'success',
      time: 2000,
      message: 'Success! Your avatar is updated!'
    }));

  } catch (error) {

    dispatch(sendNotification({
      severity: 'error',
      time: 2000,
      message: error.message
    }));
    
  }

  dispatch(stopLoader());
};

export const deleteAvatar = (profileId : number) => async(dispatch : Dispatch) => {
  dispatch(startLoader());

  try {

    const response = await ProfileService.Instance.deleteAvatar(`${config.BE_URL}/profile/avatar`, { id: profileId });
    dispatch(deleteProfileAvatar(response.data));

  } catch (error) {

    dispatch(sendNotification({
      severity: 'error',
      time: 2000,
      message: error.message
    }));
  }

  dispatch(stopLoader());
};