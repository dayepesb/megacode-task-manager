import {Routes} from '@angular/router';

import {PrincipalPageComponent} from '@app/module/general/principal-page/principal-page.component';

export const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: PrincipalPageComponent}
];
