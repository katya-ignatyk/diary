export class StorageService {
  public static setAccessToken(token : string) {
    return localStorage.setItem('accessToken', token);
  }

  public static setRefreshToken(token : string) {
    return localStorage.setItem('refreshToken', token);
  }

  public static getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  public static getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  public static removeRefreshToken() {
    return localStorage.removeItem('refreshToken');
  }

  public static removeAccessToken() {
    return localStorage.removeItem('accessToken');
  }
}