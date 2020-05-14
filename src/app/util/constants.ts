import {environment} from '@environment/environment';
import * as CryptoJS from 'crypto-js';

export class Constants {

  public static readonly NAME_APP: string = 'task-manager';
  public static readonly ID_APP: string = '1';
  public static readonly DEV_URL: string = 'http://localhost:8080';
  public static readonly PROD_URL: string = 'http://localhost:8080';
  public static readonly BASE_URL: string = environment ? Constants.PROD_URL : Constants.DEV_URL;
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

  public static readonly URLS_ROUTER = {
    empty: { url: '', authorized: false },
    urlNotFound: { url: 'not/found' , authorized: false },
    home: { url: 'home', authorized: false },
    login: { url: 'authentication/login', authorized: false },
    register: { url: 'authentication/register', authorized: false },
    fogotPassword: { url: 'authentication/forgot/password', authorized: false },
    verify: { url: 'verify', authorized: false },
    resendVerify: { url: 'authentication/verify', authorized: false },
    principalPageUser: { url: 'user/home', authorized: true }
  };


  public static readonly URLS_TO_BACK = {
    register: Constants.BASE_URL + '/authentication/register',
    verifyAccount: Constants.BASE_URL + '/authentication/verify',
    login: Constants.BASE_URL + '/authentication/login',
    resendVerify: Constants.BASE_URL + '/authentication/resend/verify',
    verifyToken: Constants.BASE_URL + '/authentication/token/verify'
  };

  public static readonly CONFIG_NOTIFICATIONS = {
    timeOut: 4000,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    progressBar: true,
    closeButton: true
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

  public static readonly LABELS: string = Constants.BASE_URL + '/labels/app';
  public static readonly IMAGES_PRINCIPAL_PAGE: string = Constants.BASE_URL + '/image/principal/page/get';

}
