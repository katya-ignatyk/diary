import { HttpService } from './httpService';
import { IUserRegistrationData } from '../components/registration/SignUpForm/interfaces';
import { IUserData } from '../redux/actions/user/interfaces';

interface IBaseResponse {
  message : string;
}

interface IUserRegistrationResponse {
  user : IUserRegistrationData;
  message : string;
}

interface IVerifyUserResponse {
  user : IUserData;
  refreshToken : string;
  accessToken : string;
  message : string;
}

interface IUserAuthResponse {
  user : IUserData;
  refreshToken : string;
  accessToken : string;
  message : string;
}

interface IRefreshedTokenResponse {
  user : IUserData;
  newAccessToken : string;
  newRefreshToken : string;
}

interface IVerifyAccessTokenResponse {
  user : IUserData;
}

export class UserService {
  private static instance : UserService;

  public static get Instance() : UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public sendUserDataToSignUp<T>(url : string, body : T) {
    return HttpService.post<IUserRegistrationResponse, T>(url, body);
  }

  public sendUserDataToSignIn<T>(url : string, body : T) {
    return HttpService.post<IUserAuthResponse, T>(url, body);
  }

  public verifyTokenToSignUp<T>(url : string, body : T) {
    return HttpService.post<IVerifyUserResponse, T>(url, body);
  }

  public sendEmail<T>(url : string, body : T) {
    return HttpService.post<IBaseResponse, T>(url, body);
  }

  public resetPassword<T>(url : string, body : T) {
    return HttpService.post<IBaseResponse, T>(url, body);
  }

  public verifyAccessToken<T>(url : string, body : T) {
    return HttpService.post<IBaseResponse & IVerifyAccessTokenResponse,T>(url, body);
  }
  public refreshTokens<T>(url : string, body : T) {
    return HttpService.post<IRefreshedTokenResponse, T>(url, body);
  }
}
