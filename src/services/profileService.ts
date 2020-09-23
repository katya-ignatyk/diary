import { HttpService } from "./httpService";
import { IProfileData, IAvatar } from '../redux/actions/profile/interfaces';

export class ProfileService {
  private static instance : ProfileService;

  public static get Instance() : ProfileService {
    if (!ProfileService.instance) {
      ProfileService.instance = new ProfileService();
    }
    return ProfileService.instance;
  }

  public updateProfile<T>(url : string, body : T) {
    return HttpService.put<IProfileData, T>(url, body);
  }

  public updateAvatar<T>(url : string, body : T) {
    return HttpService.put<IAvatar, T>(url, body);
  }

  public deleteAvatar<T>(url : string, body : T) {
    return HttpService.delete<IAvatar, T>(url, body);
  }
}