import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Constants} from '@app/constant/constants';
import {UrlConstant} from '@app/constant/url.constant';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  messages: Map<string, string>;

  constructor(private http: HttpClient) { }

  getMessage(key: string): string {
    if (!key) {
      return 'bad.key';
    }

    let value: string = this.messages.get(key);
    if (!value) {
      return 'null.key';
    }
    return value;
  }

  getLabels(): Promise<any> {
    let res: Promise<any>;
    let url = UrlConstant.LABELS;

    const params: HttpParams = new HttpParams().set(Constants.PARAMS.APP_ID, Constants.ID_APP);

    // @ts-ignore
    res = this.http.get(url, { params: params })
      .toPromise()
      .then(response => {
        this.messages = new Map();
        Object.keys(response).forEach(element => {
          this.messages.set(response[element]['key'], response[element]['LabelEn']);
        });
      }).catch(err => {
        console.log('error create pipe');
        console.log(err);
      });

    return res;
  }
}
