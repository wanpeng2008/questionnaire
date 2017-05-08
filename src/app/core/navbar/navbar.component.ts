import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserService, private loginService:LoginService, private router:Router) { }
  ngOnInit() {
    console.debug('NavbarComponent init')
  }
  logout() {
    //this.loginService.logout();
    //this.userService.isLogin = false;
    this.userService.userInfo = null;
    this.router.navigate(['']);
  }

}
