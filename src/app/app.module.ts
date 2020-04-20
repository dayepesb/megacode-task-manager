import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {APP_ROUTES} from '@app/config/main.routes';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {addLibraryIcons} from '@app/config/fontawesome-icons';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {GeneralModule} from '@app/module/general/general.module';
import {ApplicationPipesModuleModule} from '@app/module/application-pipes-module/application-pipes-module.module';
import {AuthenticationModule} from '@app/module/authentication/authentication.module';
import {ToastrModule} from 'ngx-toastr';
import {Notifications} from '@app/util/notifications';
import {Constants} from '@app/util/constants';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ApplicationPipesModuleModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    ToastrModule.forRoot(Constants.CONFIG_NOTIFICATIONS),
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    GeneralModule,
    AuthenticationModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    GeneralModule,
    AuthenticationModule
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
  constructor(private library: FaIconLibrary) {
    addLibraryIcons(library);
  }
}
