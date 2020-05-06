import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {APP_ROUTES} from '@app/config/main.routes';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {addLibraryIcons} from '@app/config/fontawesome-icons';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {GeneralModule} from '@app/module/general/general.module';
import {ApplicationPipesModuleModule} from '@app/module/application-pipes-module/application-pipes-module.module';
import {AuthenticationModule} from '@app/module/authentication/authentication.module';
import {ToastrModule} from 'ngx-toastr';
import {Constants} from '@app/util/constants';
import {SpinnerComponent} from './module/general/spinner/spinner.component';
import { SpinnerOverlayComponent } from './module/general/spinner-overlay/spinner-overlay.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {MegacodeInterceptor} from '@app/util/MegacodeInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    SpinnerOverlayComponent
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
    AuthenticationModule,
    OverlayModule
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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MegacodeInterceptor,
      multi: true
    }
  ]
})

export class AppModule {
  constructor(private library: FaIconLibrary) {
    addLibraryIcons(library);
  }
}
