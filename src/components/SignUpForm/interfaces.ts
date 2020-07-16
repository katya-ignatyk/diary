export interface IUserRegistrationData {
  username : string;
  email : string;
  password : string;
}

export interface IUserRegistrationReduxProps {
  isLoaderActive : boolean;
  isSuccessNotification : boolean, 
  isErrorNotification : boolean
  fetchUser : (values : IUserRegistrationData) => void;
  startLoader : () => void;
}
