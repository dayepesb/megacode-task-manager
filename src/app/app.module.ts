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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ApplicationPipesModuleModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    GeneralModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    GeneralModule
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
