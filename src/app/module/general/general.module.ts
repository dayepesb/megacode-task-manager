import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderPrincipalPageComponent} from '@app/module/general/header-principal-page/header-principal-page.component';
import {FooterPrincipalPageComponent} from '@app/module/general/footer-principal-page/footer-principal-page.component';
import {PrincipalPageComponent} from '@app/module/general/principal-page/principal-page.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {addLibraryIcons} from '@app/config/fontawesome-icons';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ApplicationPipesModuleModule} from '@app/module/application-pipes-module/application-pipes-module.module';
import {AppModule} from '@app/app.module';


@NgModule({
  declarations: [
    HeaderPrincipalPageComponent,
    FooterPrincipalPageComponent,
    PrincipalPageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
    ApplicationPipesModuleModule
  ],
  exports: [
    RouterModule
  ]
})

export class GeneralModule {
  constructor(private library: FaIconLibrary) {
    addLibraryIcons(library);
  }
}
