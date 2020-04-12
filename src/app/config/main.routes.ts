import {Routes} from '@angular/router';
import {PrincipalPageComponent} from '@app/module/general/principal-page/principal-page.component';
import {Constants} from '@app/util/constants';
import {LoginComponent} from '@app/module/authentication/login/login.component';
import {RegisterComponent} from '@app/module/authentication/register/register.component';

export const APP_ROUTES: Routes = [
  {path: Constants.URLS.empty, redirectTo: Constants.URLS.home, pathMatch: 'full'},
  {path: Constants.URLS.home, component: PrincipalPageComponent},
  {path: Constants.URLS.login, component: LoginComponent},
  {path: Constants.URLS.register, component: RegisterComponent}
];
