export interface IUserRegistrationData {
  username : string;
  email : string;
  password : string;
}

export interface IUserRegistrationReduxProps {
  signUp : (values : IUserRegistrationData) => Promise<void>;
}
