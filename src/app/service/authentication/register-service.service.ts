import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Notifications} from '@app/util/notifications';
import {EncryptionService} from '@app/service/encryption-service/encryption-service.service';
import {UrlConstant} from '@app/constant/url.constant';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private notification: Notifications,
              private encryptionService: EncryptionService) { }

  registerUser(dataUser: any): Promise<any> {
    let res: Promise<any>;
    let url = UrlConstant.URLS_TO_BACK.register;
    const params: HttpParams = new HttpParams();

    dataUser.password = this.encryptionService.encrypAes(dataUser.password);

    res = this.http.post(url, dataUser,{ params: params })
      .toPromise()
      .then(response => {
        this.notification.succesNotification('megacode.form.register.title.sucess', 'megacode.form.register.description.sucess');
      }).catch(err => {
        let message = err.error.message;
        this.notification.errorNotification('megacode.form.error', message);
      });

    return res;
  }

  verifyUser(dataUser: any): Promise<any> {
    let res: Promise<any>;
    let url = UrlConstant.URLS_TO_BACK.verifyAccount;
    const params: HttpParams = new HttpParams();

    res = this.http.post(url, dataUser,{ params: params })
      .toPromise();

    return res;

  }
}
