export class StorageService {
  public static setAccessToken(token : string) {
    return localStorage.setItem('accessToken', token);
  }

  public static setRefreshToken(token : string) {
    return localStorage.setItem('refreshToken', token);
  }

  public static getAccessToken(key : string) {
    return localStorage.getItem(key);
  }

  public static getRefreshToken(key : string) {
    return localStorage.getItem(key);
  }
}