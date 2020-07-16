import { HttpService } from './httpService';
import { IUser } from '../components/SignUpForm/interfaces';

export class UserService {
  private static instance: UserService;

  public static get Instance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public sendUserData(url: string, userData: IUser) {
    return HttpService.post(url, userData);
  }
}
