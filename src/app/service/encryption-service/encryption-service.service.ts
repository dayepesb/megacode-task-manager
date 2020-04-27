import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {Constants} from '@app/util/constants';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  encrypAes(value: string) {
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), Constants.AES_KEY_CRYPTOR, Constants.AES_OPTIONS);

    return encrypted.toString();
  }

  decryptAes(value: string) {
    const decrypted = CryptoJS.AES.decrypt(value, Constants.AES_KEY_CRYPTOR, Constants.AES_OPTIONS);

    return decrypted.toString(CryptoJS.enc.Utf8);
  }

}
