import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ApplicationPipesModuleModule} from '@app/module/application-pipes-module/application-pipes-module.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent],
  imports: [
    ApplicationPipesModuleModule,
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthenticationModule { }
