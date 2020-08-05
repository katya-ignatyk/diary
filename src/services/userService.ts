import { HttpService } from './httpService';
import { IUserRegistrationData } from 'components/SignUpForm/interfaces';
import { IUserAuthData } from 'components/SignInForm/interfaces';
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
  user : IUserAuthData;
  refreshToken : string;
  accessToken : string;
  message : string;
}

interface IRefreshedTokenResponse {
  user : IUserRegistrationData;
  newAccessToken : string;
  newRefreshToken : string;
}

export class UserService {
  private static instance : UserService;

  public static get Instance() : UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public async sendUserDataToSignUp<T>(url : string, body : T) {
    return await HttpService.post<IUserRegistrationResponse, T>(url, body);
  }

  public async sendUserDataToSignIn<T>(url : string, body : T) {
    return await HttpService.post<IUserAuthResponse, T>(url, body);
  }

  public async verifyTokenToSignUp<T>(url : string, body : T) {
    return await HttpService.post<IVerifyUserResponse, T>(url, body);
  }

  public sendEmail<T>(url : string, body : T) {
    return HttpService.post<IBaseResponse, T>(url, body);
  }

  public resetPassword<T>(url : string, body : T) {
    return HttpService.post<IBaseResponse,T>(url, body);
  }

  public verifyAccessToken<T>(url : string, body : T) {
    return HttpService.post<IBaseResponse,T>(url, body);
  }
  public refreshTokens<T>(url : string, body : T) {
    return HttpService.post<IRefreshedTokenResponse,T>(url, body);
  }
}
