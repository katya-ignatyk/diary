import { IAction } from '../../../interfaces';
import { IProfileActionTypes, IProfileState } from '../../reducers/profile/interfaces';

export type ISaveProfile = IAction<IProfileActionTypes.SAVE_PROFILE, IProfileState>
export type ISaveProfileData = IAction<IProfileActionTypes.SAVE_PROFILE_DATA, IProfileData>
export type IUpdateProfileAvatar = IAction<IProfileActionTypes.UPDATE_PROFILE_AVATAR, IAvatar>
export type IDeleteProfileAvatar = IAction<IProfileActionTypes.UPDATE_PROFILE_AVATAR, IAvatar>

export interface IProfileData {
  id : number;
  girl_name : string;
  girl_age : number;
  boy_name : string;
  boy_age : number;
}

export interface IAvatar {
  avatarUrl : string;
}