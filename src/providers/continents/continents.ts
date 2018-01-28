import { Injectable } from '@angular/core';
import { HttprequestsProvider } from '../httprequests/httprequests';
import { urlConfig } from "../url.config";

@Injectable()
export class ContinentsProvider {
  urls: any;
  constructor(private httpReq: HttprequestsProvider) {
    console.log('Hello ContinentsProvider Provider');
    this.urls = urlConfig;
  }

  getAllContinents<T>(): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.httpReq.getHttp<T>(this.urls.vender.continents).then((res) => {
        resolve(res);
      }).catch((e) => {
        reject(e);
      });
    });
  }
}
