export class HttpService {
  public static post<T>(url : string, body : T) {
    return this.sendRequest(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public static get<T>(url : string, body : T) {
    return this.sendRequest(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public static put<T>(url : string, body : T) {
    return this.sendRequest(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body
    });
  }

  public static delete<T>(url : string, body : T) {
    return this.sendRequest(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body
    });
  }

  private static sendRequest<T>(url : string, body : T) {
    return fetch(url, body);
  }
}
