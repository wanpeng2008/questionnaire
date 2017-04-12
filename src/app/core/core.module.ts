import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuestionnaireService} from "./services/questionnaire.service";
import { NavbarComponent } from './navbar/navbar.component';
import {LoginService} from "./services/login.service";
import {RegisterService} from "./services/register.service";
import {UserService} from "./services/user.service";
import {RouterModule} from "@angular/router";
import {AuthGuardService} from "./services/auth-guard.service";
import {BackendMockService} from "./services/backend-mock.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  providers: [LoginService,RegisterService,AuthGuardService, BackendMockService],
  exports: [NavbarComponent]
})
export class CoreModule { }
