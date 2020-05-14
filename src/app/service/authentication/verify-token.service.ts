import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '@app/util/constants';

@Injectable({
  providedIn: 'root'
})
export class VerifyTokenService {

  url: any = Constants.URLS_TO_BACK;

  constructor(private http: HttpClient) { }

  verifyToken(token: string): Promise<any> {
    let res: Promise<any>;

    res = this.http.get(this.url.verifyToken, {params: {
        token: token
    }}).toPromise();

    return res;
  }
}
