import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FieldBase} from "../field/field-base";
import {ActivatedRoute, Router} from "@angular/router";
import {Response} from "@angular/http";
import {LoginService} from "../../../core/services/login.service";
import {UserService} from "../../../core/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  fields: FieldBase<any>[] = [];
  returnUrl: string ='';

  constructor(private rs: LoginService,
              private activeRoute: ActivatedRoute,
              private route:Router,
              private userService:UserService) {
    this.fields = rs.getFields();
    this.activeRoute.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'];
    });
  }

  ngOnInit() {
    console.debug('LoginComponent init')
    this.form = this.rs.toFormGroup(this.fields);
  }

  login() {
    this.rs
      .login(this.form.value)
      .subscribe((res) => {
        if (res && res.id) {
          this.userService.isLogin = true;
          this.userService.userInfo = { username: res.username,createDate:new Date().toLocaleString()}
          this.route.navigateByUrl(this.returnUrl?this.returnUrl:'/');
        }
      }, error => {
        console.error(error);
      });
  }
}
