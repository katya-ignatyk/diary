import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CustomErrors } from '../interfaces';

export class HttpService {
  public static get<T>(url : string, options ?: AxiosRequestConfig) : Promise<AxiosResponse<T>> {
    return this.sendRequest<T>({
      url,
      method: 'get',
      ...options,
    });
  }

  public static post<T, P>(url : string, data ?: P, options ?: AxiosRequestConfig) : Promise<AxiosResponse<T>> {
    return this.sendRequest<T>({
      url,
      method: 'post',
      data,
      ...options,
    });
  }

  public static put<T, P>(url : string, data ?: P, options ?: AxiosRequestConfig) : Promise<AxiosResponse<T>> {
    return this.sendRequest<T>({
      url,
      method: 'put',
      data,
      ...options,
    });
  }

  public static delete<T, P>(url : string, data ?: P, options ?: AxiosRequestConfig) : Promise<AxiosResponse<T>> {
    return this.sendRequest<T>({
      url,
      method: 'delete',
      data,
      ...options,
    });
  }

  private static sendRequest<T>(config : AxiosRequestConfig) : Promise<AxiosResponse<T>> {
    return axios.request({ ...config });
  }
}