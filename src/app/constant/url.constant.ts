import {environment} from '@environment/environment';

export class UrlConstant {

  public static readonly DEV_URL: string = 'http://localhost:8080';
  public static readonly PROD_URL: string = 'http://localhost:8080';
  public static readonly BASE_URL: string = environment ? UrlConstant.PROD_URL : UrlConstant.DEV_URL;

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
    register: UrlConstant.BASE_URL + '/authentication/register',
    verifyAccount: UrlConstant.BASE_URL + '/user/verify',
    login: UrlConstant.BASE_URL + '/authentication/login',
    resendVerify: UrlConstant.BASE_URL + '/mailer/resend/verify',
    verifyToken: UrlConstant.BASE_URL + '/user/token/verify',
    sendMailForgotUser: UrlConstant.BASE_URL + '/mailer/forgot'
  };

  public static readonly LABELS: string = UrlConstant.BASE_URL + '/labels/app';
  public static readonly IMAGES_PRINCIPAL_PAGE: string = UrlConstant.BASE_URL + '/image/principal/page/get';

}
