import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttprequestsProvider {
  
  constructor(public http: HttpClient) {
    console.log('Hello HttprequestsProvider Provider');
  }

  public async getHttp<T>(url: string, headers?: HttpHeaders): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.http.get<T>(url).toPromise<T>().then((res: T) => {
        resolve(res);
      }).catch((e) => {
        reject(e);
      });
      
    });
  }

}
