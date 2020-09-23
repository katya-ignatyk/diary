export interface IVerifyReduxProps { 
  verifyUser : (token : string) => Promise<boolean>;
}

