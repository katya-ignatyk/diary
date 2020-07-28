export enum UserActionTypes{
  SAVE_USER_DATA = 'SAVE_USER_DATA'
}

export interface IUserState {
  email : string; 
  username : string;
}