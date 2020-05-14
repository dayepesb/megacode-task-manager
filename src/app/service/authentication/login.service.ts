import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Constants} from '@app/util/constants';
import {Notifications} from '@app/util/notifications';
import {EncryptionService} from '@app/service/encryption-service/encryption-service.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: any = Constants.URLS_TO_BACK;
  urlPage: any = Constants.URLS_ROUTER;

  constructor(private router: Router, private http: HttpClient, private notifications: Notifications, private encryptionService: EncryptionService) {
  }

  login(dataUser): Promise<any> {
    let res: Promise<any>;
    const params: HttpParams = new HttpParams();

    dataUser.password = this.encryptionService.encrypAes(dataUser.password);

    res = this.http.post(this.url.login, dataUser, {params: params})
      .toPromise()
      .then(success => {
        let varsLocalStorage = Constants.VARS_LOCALSTORAGE;
        varsLocalStorage.forEach(value => {
          localStorage.setItem(value, success[value]);
        });
        this.router.navigateByUrl(this.urlPage.principalPageUser.url);
      }).catch(err => {
        if (err.error.code == -18) {
          this.router.navigateByUrl(this.urlPage.resendVerify);
        } else {
          this.notifications.errorNotification('megacode.error.empty.input.title', err.error.message);
        }
      });

    return res;
  }

  resendVerifyEmail(email: string): Promise<any> {
    let res: Promise<any>;

    res = this.http.get(this.url.resendVerify, {params: {
        email: email
      }})
      .toPromise()
      .then(success => {
        this.notifications.succesNotification('megacode.form.success', 'megacode.resend.email.success');
      }).catch(err => {
        this.notifications.errorNotification('megacode.form.error', err.error.message);
      });

    return res;
  }
}
