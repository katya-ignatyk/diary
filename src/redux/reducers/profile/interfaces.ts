export enum IProfileActionTypes {
  SAVE_PROFILE = 'SAVE_PROFILE',
  SAVE_PROFILE_DATA = 'SAVE_PROFILE_DATA',
  UPDATE_PROFILE_AVATAR = 'SAVE_PROFILE_AVATAR',
}

export interface IProfileState {
  id : number;
  girl_name : string;
  girl_age : number;
  boy_name : string;
  boy_age : number;
  avatarUrl : string;
}