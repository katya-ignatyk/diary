export interface IResetPasswordReduxProps {
  isLoaderActive : boolean;
  startLoader : () => void;
  resetPassword : (password : string, token : string) => Promise<boolean>;
}