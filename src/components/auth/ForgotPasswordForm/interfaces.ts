export interface IForgotPasswordReduxProps {
  sendForgotPasswordEmail : (email : string) => Promise<void>;
}