import {Injectable} from '@angular/core';
import {Notifications} from '@app/util/notifications';
import {HttpClient} from '@angular/common/http';
import {UrlConstant} from '@app/constant/url.constant';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  url: any = UrlConstant.URLS_TO_BACK;

  constructor(private http: HttpClient, private notification: Notifications) {
  }

  sendMailForgotUser(mail: string): Promise<any> {
    let res: Promise<any>;

    this.http.get(this.url.sendMailForgotUser,{params: {
        email: mail
      }})
      .toPromise()
      .then(success => {
        console.log(success);
      }).catch(err => {
        console.log(err);
    });


    return res;
  }
}
