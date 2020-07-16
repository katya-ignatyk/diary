import { IUserRegistrationData } from '../components/SignUpForm/interfaces';
import { HttpService } from './httpService';

export class UserService {
  private static instance : UserService;

  public static get Instance() : UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public sendUserData(url : string, userData : IUserRegistrationData) {
    return HttpService.post(url, userData);
  }

  public verifyAccessToken(url : string, body : {token : string}) {
    return HttpService.post(url, body);
  }
}
