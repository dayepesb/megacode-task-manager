import {Routes} from '@angular/router';
import {PrincipalPageComponent} from '@app/module/general/principal-page/principal-page.component';
import {Constants} from '@app/constant/constants';
import {LoginComponent} from '@app/module/authentication/login/login.component';
import {RegisterComponent} from '@app/module/authentication/register/register.component';
import {ForgotPasswordComponent} from '@app/module/authentication/forgot-password/forgot-password.component';
import {VerifyComponent} from '@app/module/authentication/verify/verify.component';
import {VerifyUserComponent} from '@app/module/authentication/verify-user/verify-user.component';
import {PrincipalPageUserComponent} from '@app/module/user-page/principal-page/principal-page-user.component';
import {UrlConstant} from '@app/constant/url.constant';

export const APP_ROUTES: Routes = [
  {path: UrlConstant.URLS_ROUTER.empty.url, redirectTo: UrlConstant.URLS_ROUTER.home.url, pathMatch: 'full'},
  {path: UrlConstant.URLS_ROUTER.home.url, component: PrincipalPageComponent},
  {path: UrlConstant.URLS_ROUTER.login.url, component: LoginComponent},
  {path: UrlConstant.URLS_ROUTER.register.url, component: RegisterComponent},
  {path: UrlConstant.URLS_ROUTER.fogotPassword.url, component: ForgotPasswordComponent},
  {path: UrlConstant.URLS_ROUTER.verify.url, component: VerifyComponent},
  {path: UrlConstant.URLS_ROUTER.resendVerify.url, component: VerifyUserComponent},
  {path: UrlConstant.URLS_ROUTER.principalPageUser.url, component: PrincipalPageUserComponent}

];
