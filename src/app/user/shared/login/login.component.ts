import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {FieldBase} from "../field/field-base";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../core/services/user.service";
import {FieldValidators} from "../field/field-validators";
import {FieldText} from "../field/field-text";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  fields: FieldBase<any>[] = [];
  returnUrl: string ='';

  constructor(private authService: AuthService,
              private activeRoute: ActivatedRoute,
              private route:Router,
              private userService:UserService) {
    this.fields = this.getFields();
    this.activeRoute.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'];
    });
  }

  ngOnInit() {
    console.debug('LoginComponent init')
    this.form = this.toFormGroup(this.fields);
  }

  getFields() {
    let fields: FieldBase<any>[] = [
      new FieldText({
        key: 'username',
        label: '用户名',
        value: '',
        required: true,
        pattern: 'username',
        order: 1
      }),
      new FieldText({
        key: 'password',
        label: '密码',
        type: 'password',
        value: '',
        required: true,
        pattern: 'password',
        order: 2
      }),
    ];
    return fields.sort((a, b) => a.order - b.order);
  }

  toFormGroup(fields: FieldBase<any>[]) {
    let group: any = {};

    fields.forEach(field => {
      group[field.key] =
        field.pattern ?
          new FormControl(field.value || '', (<any>FieldValidators)[field.pattern]) :
          field.required ?
            new FormControl(field.value || '', Validators.required) :
            new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }

  login() {
    this.authService
      .login(this.form.value)
      .subscribe(() => {
        this.route.navigateByUrl(this.returnUrl ? this.returnUrl : '/');
      }, error => {
        console.error(error);
      });
  }
}
