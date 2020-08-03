export interface IUserRegistrationData {
  username : string;
  email : string;
  password : string;
}

export interface IUserRegistrationReduxProps {
  isLoaderActive : boolean;
  fetchUser : (values : IUserRegistrationData) => void;
  startLoader : () => void;
}
