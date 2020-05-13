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
  {path: Constants.URLS_ROUTER.empty, redirectTo: Constants.URLS_ROUTER.home, pathMatch: 'full'},
  {path: Constants.URLS_ROUTER.home, component: PrincipalPageComponent},
  {path: Constants.URLS_ROUTER.login, component: LoginComponent},
  {path: Constants.URLS_ROUTER.register, component: RegisterComponent},
  {path: Constants.URLS_ROUTER.fogotPassword, component: ForgotPasswordComponent},
  {path: Constants.URLS_ROUTER.verify, component: VerifyComponent},
  {path: Constants.URLS_ROUTER.resendVerify, component: VerifyUserComponent},
  {path: Constants.URLS_ROUTER.principalPageUser, component: PrincipalPageUserComponent}
];
