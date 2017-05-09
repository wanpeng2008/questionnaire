import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }
  ngOnInit() {
    console.debug('NavbarComponent init')
    if(this.authService.loggedIn()){
      this.authService.refreshCurrentUserInfoRequest().subscribe()
    }
  }
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
    })
  }

}
