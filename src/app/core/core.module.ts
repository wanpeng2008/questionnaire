import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {LoginService} from "./services/login.service";
import {RegisterService} from "./services/register.service";
import {RouterModule} from "@angular/router";
import {AuthGuardService} from "./services/auth-guard.service";
import {BackendMockService} from "./services/backend-mock.service";

import {AuthService} from "./services/auth.service";
import {AuthModule} from "../auth/auth.module";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthModule,
  ],
  declarations: [NavbarComponent],
  providers: [LoginService,RegisterService,AuthGuardService, BackendMockService, AuthService],
  exports: [NavbarComponent]
})
export class CoreModule { }
