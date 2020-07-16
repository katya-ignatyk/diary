export class HttpService {
  public static post(url: string, body: object) {
    return this.sendRequest(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  private static sendRequest<T>(url: string, body: T) {
    return fetch(url, body);
  }
}

