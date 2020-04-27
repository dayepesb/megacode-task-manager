import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Constants} from '@app/util/constants';
import {Notifications} from '@app/util/notifications';
import {EncryptionService} from '@app/service/encryption-service/encryption-service.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private notification: Notifications, private encryptionService: EncryptionService) { }

  registerUser(dataUser: any): Promise<any> {
    let res: Promise<any>;
    let url = Constants.AUTHENTICATION_REGISTER;
    const params: HttpParams = new HttpParams();

    dataUser.password = this.encryptionService.encrypAes(dataUser.password);

    res = this.http.post(url, dataUser,{ params: params })
      .toPromise()
      .then(response => {
        console.log(response);
      }).catch(err => {
        let message = err.error.message;
        this.notification.errorNotification('megacode.form.error', message);
      });

    return res;
  }
}
