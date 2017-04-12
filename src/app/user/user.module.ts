import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {CoreModule} from "../core/core.module";
import {SharedModule} from "./shared/shared.module";
import {UserService} from "../core/services/user.service";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ],
  declarations: [UserComponent],
})
export class UserModule { }
