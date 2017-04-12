import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CenterComponent} from "./center.component";
import {AuthGuardService} from "../core/services/auth-guard.service";

const routes: Routes = [{
  path: '',
  component: CenterComponent,
  canActivate: [AuthGuardService]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterRoutingModule { }
