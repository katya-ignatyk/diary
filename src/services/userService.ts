import { HttpService } from './httpService';
import { IUserRegistrationData, IReduxUserData } from '../redux/actions/user/interfaces';
import { IProfileState } from '../redux/reducers/profile/interfaces';

interface IBaseResponse {
  message : string;
}

interface IVerifySignUpResponse {
  user : IReduxUserData;
  refreshToken : string;
  accessToken : string;
  message : string;
}

interface IUserSignInResponse {
  user : IReduxUserData;
  profile : IProfileState;
  refreshToken : string;
  accessToken : string;
  message : string;
}

interface IFetchUserResponse {
  user : IReduxUserData;
  profile : IProfileState;
}

interface IUserAuthResponse extends IFetchUserResponse {
  updatedAccessToken : string;
  updatedRefreshToken : string;
}

export class UserService {
  private static instance : UserService;

  public static get Instance() : UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public signUp<T>(url : string, body : T) {
    return HttpService.post<IBaseResponse, T>(url, body);
  }

  public signIn<T>(url : string, body : T) {
    return HttpService.post<IUserSignInResponse, T>(url, body);
  }

  public verifySignUp<T>(url : string, body : T) {
    return HttpService.post<IVerifySignUpResponse, T>(url, body);
  }

  public sendEmail<T>(url : string, body : T) {
    return HttpService.post<IBaseResponse, T>(url, body);
  }

  public resetPassword<T>(url : string, body : T) {
    return HttpService.post<IBaseResponse, T>(url, body);
  }

  public fetchUser<T>(url : string, body : T) {
    return HttpService.post<IFetchUserResponse,T>(url, body);
  }

  public auth<T>(url : string, body : T) {
    return HttpService.post<IUserAuthResponse, T>(url, body);
  }
}
