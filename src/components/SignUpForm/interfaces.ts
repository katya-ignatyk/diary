export interface IUser {
  username: string;
  email: string;
  password: string
}

export interface IReduxProps {
  isVerifyEmailSend: boolean;
  isEmailExists: boolean;
  isLoaderActive: boolean;
  fetchUser: (values: IUser) => void;
  startLoader: () => void,
  stopLoader: () => void
}
