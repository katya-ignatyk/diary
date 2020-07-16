export enum UserRegistrationActionTypes {
  SEND_ERROR = 'SEND_ERROR',
  SEND_VERIFY_EMAIL = 'SEND_VERIFY_EMAIL',
  START_LOADER = 'START_LOADER',
  STOP_LOADER = 'STOP_LOADER'
}

export interface IUserRegistrationState {
  isVerifyEmailSend: boolean,
  isLoaderActive: boolean,
  isEmailExists: boolean
}