export interface IForgotPasswordReduxProps {
  isLoaderActive : boolean;
  startLoader : () => void;
  sendEmail : (email : string) => Promise<boolean>;
}