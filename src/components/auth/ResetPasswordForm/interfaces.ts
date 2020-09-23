export interface IResetPasswordReduxProps {
  resetPassword : (password : string, token : string) => Promise<boolean>;
}