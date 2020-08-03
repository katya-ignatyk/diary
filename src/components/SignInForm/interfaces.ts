export interface IUserAuthData {
  email : string;
  password : string;
}

export interface IUserAuthReduxProps {
  isLoaderActive : boolean;
  fetchUser : (userData : IUserAuthData) => Promise<boolean>;
  startLoader : () => void;
}
