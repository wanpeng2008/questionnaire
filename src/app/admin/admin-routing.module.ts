import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  children:[
    {
      path: 'about',
      loadChildren: 'app/about/about.module#AboutModule'
    },{
      path: 'edit',
      loadChildren: 'app/edit/edit.module#EditModule'
    },{
      path: 'user',
      loadChildren: 'app/user/user.module#UserModule'
    },{
      path: 'center',
      loadChildren: 'app/center/center.module#CenterModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
