import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
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
  providers: [RegisterService,AuthGuardService, BackendMockService],
  exports: [NavbarComponent]
})
export class CoreModule { }
