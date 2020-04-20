import {environment} from '@environment/environment';

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

  public static SELECT_LENGUAGE = Constants.LENGUAGES.CODE_EN;

  public static readonly URL_IMAGES_S3 = 'https://megacode-bucket-images.s3-sa-east-1.amazonaws.com/';

  public static readonly NAME_APP: string = 'task-manager';
  public static readonly ID_APP: string = '1';
  public static readonly DEV_URL: string = 'http://localhost:8080';
  public static readonly PROD_URL: string = 'http://localhost:8080';
  public static readonly BASE_URL: string = environment ? Constants.PROD_URL : Constants.DEV_URL;

  public static readonly LABELS: string = Constants.BASE_URL + '/labels/app';
  public static readonly IMAGES_PRINCIPAL_PAGE: string = Constants.BASE_URL + '/image/principal/page/get';
}
