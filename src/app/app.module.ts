import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalPageComponent } from './general/principal-page/principal-page.component';
import {APP_ROUTES} from '@app/config/main.routes';
import { I18nPipe } from './pipe/i18n.pipe';
import {LabelService} from '@app/service/label-service/label.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { HeaderPrincipalPageComponent } from './general/header-principal-page/header-principal-page.component';
import { FooterPrincipalPageComponent } from './general/footer-principal-page/footer-principal-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {addLibraryIcons} from '@app/config/fontawesome-icons';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

export function loadResources(labelService: LabelService, http: HttpClient) {
  return async () => {
    await labelService.getLabels();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    PrincipalPageComponent,
    I18nPipe,
    HeaderPrincipalPageComponent,
    FooterPrincipalPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    I18nPipe,
    {
      provide: APP_INITIALIZER,
      useFactory: loadResources,
      multi: true,
      deps: [LabelService, HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    addLibraryIcons(library);
  }
}
