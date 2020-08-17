import { HttpService } from "./httpService";
import { IProfileState } from '../redux/actions/profile/interfaces';

interface IProfileExistsResponse {
  profile : IProfileState;
}

interface IBaseResponse {
  status : number;
}

export class ProfileService {
  private static instance : ProfileService;

  public static get Instance() : ProfileService {
    if (!ProfileService.instance) {
      ProfileService.instance = new ProfileService();
    }
    return ProfileService.instance;
  }

  public profileExists<T>(url : string, body : T) {
    return HttpService.post<IProfileExistsResponse, T>(url, body);
  }

  public saveProfileChanges<T>(url : string, body : T) {
    return HttpService.post<IProfileExistsResponse, T>(url, body);
  }
}