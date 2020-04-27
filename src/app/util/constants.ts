import {environment} from '@environment/environment';
import * as CryptoJS from 'crypto-js';

export class Constants {

  public static readonly PARAMS: any = {
    APP_ID: 'id_app'
  };

  public static readonly LENGUAGES: any = {
    CODE_ES: 'ES',
    CODE_EN: 'EN'
  };

  public static readonly URLS_ROUTER = {
    empty: '',
    urlNotFound: 'not/found',
    home: 'home',
    login: 'authentication/login',
    register: 'authentication/register',
    fogotPassword: 'authentication/forgot/password'
  };

  public static readonly CONFIG_NOTIFICATIONS = {
    timeOut: 3500,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    progressBar: true,
    closeButton: true
  };

  public static readonly URLS_TO_BACK = {
    register: '/othentication/register'
  };

  public static readonly AES_KEY = 'aesEncryptionKey';
  public static readonly AES_IV = 'encryptionIntVec';
  public static readonly AES_KEY_CRYPTOR = CryptoJS.enc.Utf8.parse(Constants.AES_KEY);
  public static readonly iv = CryptoJS.enc.Utf8.parse(Constants.AES_IV);
  public static readonly AES_OPTIONS = {
    keySize: 128 / 8,
    iv: Constants.iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  };

  public static SELECT_LENGUAGE = Constants.LENGUAGES.CODE_EN;

  public static readonly URL_IMAGES_S3 = 'https://megacode-bucket-images.s3-sa-east-1.amazonaws.com/';

  public static readonly NAME_APP: string = 'task-manager';
  public static readonly ID_APP: string = '1';
  public static readonly DEV_URL: string = 'http://localhost:8080';
  public static readonly PROD_URL: string = 'http://localhost:8080';
  public static readonly BASE_URL: string = environment ? Constants.PROD_URL : Constants.DEV_URL;

  public static readonly LABELS: string = Constants.BASE_URL + '/labels/app';
  public static readonly IMAGES_PRINCIPAL_PAGE: string = Constants.BASE_URL + '/image/principal/page/get';
  public static readonly AUTHENTICATION_REGISTER: string = Constants.BASE_URL + '/athentication/register';
}
