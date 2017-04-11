import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditComponent} from "./edit.component";
import {AuthGuardService} from "../core/services/auth-guard.service";

const routes: Routes = [
  {
    path: ':id',
    component: EditComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
