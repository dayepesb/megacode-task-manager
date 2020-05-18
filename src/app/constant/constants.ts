import {environment} from '@environment/environment';
import * as CryptoJS from 'crypto-js';

export class Constants {

  public static readonly NAME_APP: string = 'task-manager';
  public static readonly ID_APP: string = '1';
  public static readonly AES_KEY = 'aesEncryptionKey';
  public static readonly AES_IV = 'encryptionIntVec';
  public static readonly AES_KEY_CRYPTOR = CryptoJS.enc.Utf8.parse(Constants.AES_KEY);
  public static readonly iv = CryptoJS.enc.Utf8.parse(Constants.AES_IV);

  public static readonly PARAMS: any = {
    APP_ID: 'id_app'
  };

  public static readonly LENGUAGES: any = {
    CODE_ES: 'ES',
    CODE_EN: 'EN'
  };

  public static readonly AES_OPTIONS = {
    keySize: 16,
    iv: Constants.iv
  };

  public static readonly CONFIG_NOTIFICATIONS = {
    timeOut: 4000,
    positionClass: 'toast-top-right',
    preventDuplicates: false
  };

  public static readonly VARS_LOCALSTORAGE = [
    'email',
    'name',
    'lastname',
    'username',
    'userImage',
    'token'
  ];

  public static SELECT_LENGUAGE = Constants.LENGUAGES.CODE_EN;

  public static readonly URL_IMAGES_S3 = 'https://megacode-bucket-images.s3-sa-east-1.amazonaws.com/';

}
