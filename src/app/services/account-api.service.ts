import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

export interface IHttpResponse<T> extends Response {
  parsedBody?: T;
}
export const get = async <T>(
  path: string,
  args: RequestInit = { method: 'get' }
): Promise<IHttpResponse<T>> => {
  return await http<T>(new Request(path, args));
};
export const put = async <T>(
  path: string,
  body: any,
  args: RequestInit = { method: 'put', body: JSON.stringify(body) }
): Promise<IHttpResponse<T>> => {
  return await http<T>(new Request(path, args));
};
const requestHeaders: HeadersInit = new Headers();
requestHeaders.set('Content-Type', 'application/json;');
export const post = async <T>(
  path: string,
  body: any,
  args: RequestInit = { method: 'post', body: JSON.stringify(body), headers: requestHeaders }
): Promise<IHttpResponse<T>> => {
  return await http<T>(new Request(path, args));
};
export const http = <T>(request: RequestInfo): Promise<IHttpResponse<T>> => {
  return new Promise((resolve, reject) => {
    let response: IHttpResponse<T>;
    fetch(request)
      .then(res => {
        response = res;
        return res.json();
      })
      .then(body => {
        if (response.ok) {
          response.parsedBody = body;
          resolve(response);
        } else {
          response.parsedBody = body;
          resolve(response);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};
@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  // Base url
  baseUrl = environment.apiURL;

  public async login(data: any): Promise<IHttpResponse<any>> {
    return await post<any>(this.baseUrl + '/user/login', data);
  }
}