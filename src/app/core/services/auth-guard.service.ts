import { Injectable } from '@angular/core';
import {RouterStateSnapshot, ActivatedRouteSnapshot, Router} from "@angular/router";
import {AuthService} from "./auth.service";


@Injectable()
export class AuthGuardService {

  constructor(private authService:AuthService, private route:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.loggedIn()) {
      return true;
    }
    this.route.navigate(['/admin/user/login'],{queryParams:{returnUrl:state.url}});
    return false;
  }

}
