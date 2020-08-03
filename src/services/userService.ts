import { HttpService } from './httpService';

export class UserService {
  private static instance : UserService;

  public static get Instance() : UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public async sendUserData<T>(url : string, userData : T) {
    const data = await HttpService.post(url, userData);
    const dataJson = await data.json();
    if (!data.ok) {
      const errMsg = dataJson.message;
      throw new Error(errMsg);
    }
    return dataJson;
  }

  public sendToken(url : string, body : {token : string,}) {
    return HttpService.post(url, body);
  }

  public sendEmail(url : string, body : {email : string,}) {
    return HttpService.post(url, body);
  }

  public resetPassword(url : string, body : {password : string, token : string,}) {
    return HttpService.post(url, body);
  }
}
