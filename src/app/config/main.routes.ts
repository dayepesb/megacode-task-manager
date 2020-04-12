import {Routes} from '@angular/router';
import {PrincipalPageComponent} from '@app/module/general/principal-page/principal-page.component';
import {Constants} from '@app/util/constants';

export const APP_ROUTES: Routes = [
  {path: Constants.URLS.empty, redirectTo: Constants.URLS.home, pathMatch: 'full'},
  {path: Constants.URLS.home, component: PrincipalPageComponent}
];
