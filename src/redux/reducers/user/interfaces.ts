export enum UserActionTypes{
  SAVE_USER_DATA = 'SAVE_USER_DATA',
  AUTH_USER = 'AUTH_USER',
  AUTH_ERROR = 'AUTH_ERROR',
}

export interface IUserState {
  id : number;
  email : string; 
  username : string;
  isErrors : boolean;
  isLoaded : boolean;
}