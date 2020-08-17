export interface IUserAuthData {
  email : string;
  password : string;
}

export interface IUserAuthReduxProps {
  signIn : (userData : IUserAuthData) => Promise<boolean>;
}
