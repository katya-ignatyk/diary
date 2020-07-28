export interface IVerifyReduxProps { 
  isLoaderActive : boolean;
  startLoader : () => void;
  verifyUser : (token : string) => Promise<boolean>;
}