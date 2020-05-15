import {Routes} from '@angular/router';
import {PrincipalPageComponent} from '@app/module/general/principal-page/principal-page.component';
import {Constants} from '@app/util/constants';
import {LoginComponent} from '@app/module/authentication/login/login.component';
import {RegisterComponent} from '@app/module/authentication/register/register.component';
import {ForgotPasswordComponent} from '@app/module/authentication/forgot-password/forgot-password.component';
import {VerifyComponent} from '@app/module/authentication/verify/verify.component';
import {VerifyUserComponent} from '@app/module/authentication/verify-user/verify-user.component';
import {PrincipalPageUserComponent} from '@app/module/user-page/principal-page/principal-page-user.component';

export const APP_ROUTES: Routes = [
  {path: Constants.URLS_ROUTER.empty.url, redirectTo: Constants.URLS_ROUTER.home.url, pathMatch: 'full'},
  {path: Constants.URLS_ROUTER.home.url, component: PrincipalPageComponent},
  {path: Constants.URLS_ROUTER.login.url, component: LoginComponent},
  {path: Constants.URLS_ROUTER.register.url, component: RegisterComponent},
  {path: Constants.URLS_ROUTER.fogotPassword.url, component: ForgotPasswordComponent},
  {path: Constants.URLS_ROUTER.verify.url, component: VerifyComponent},
  {path: Constants.URLS_ROUTER.resendVerify.url, component: VerifyUserComponent},
  {path: Constants.URLS_ROUTER.principalPageUser.url, component: PrincipalPageUserComponent}

];
