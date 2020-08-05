export enum UserActionTypes{
  SAVE_USER_DATA = 'SAVE_USER_DATA',
  AUTH_USER = 'AUTH_USER',
  AUTH_ERROR = 'AUTH_ERROR',
  START_LOADING = 'START_LOADING'
}

export interface IUserState {
  email : string; 
  username : string;
  isErrors : boolean;
  isLoading : boolean;
}