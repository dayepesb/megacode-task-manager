import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {addLibraryIcons} from '@app/config/fontawesome-icons';
import {AppModule} from '@app/app.module';
import {ApplicationPipesModuleModule} from '@app/module/application-pipes-module/application-pipes-module.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ApplicationPipesModuleModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthenticationModule {
  constructor(private library: FaIconLibrary) {
    addLibraryIcons(library);
  }
}