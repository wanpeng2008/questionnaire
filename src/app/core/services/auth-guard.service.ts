import { Injectable } from '@angular/core';
import {RouterStateSnapshot, ActivatedRouteSnapshot, Router} from "@angular/router";
import {UserService} from "./user.service";

@Injectable()
export class AuthGuardService {

  constructor(private userService:UserService, private route:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.userService.isLogin) {
      return true;
    }
    this.route.navigate(['/admin/user/login'],{queryParams:{returnUrl:state.url}});
    return false;
  }

}
