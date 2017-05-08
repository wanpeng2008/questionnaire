import { Injectable } from '@angular/core';
import {SITE_HOST_URL} from "../../shared/config/env.config";
import {Http, Headers} from "@angular/http";
import {FieldBase} from "../../user/shared/field/field-base";
import {FieldText} from "../../user/shared/field/field-text";
import {FormControl, Validators, FormGroup} from "@angular/forms";
import {FieldValidators} from "../../user/shared/field/field-validators";
import {Observer, Observable} from "rxjs";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class LoginService {


  private loginUrl = `${SITE_HOST_URL}auth`;

  //constructor(private http: Http) { }
  constructor(private http: Http, public authHttp: AuthHttp) {}

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

  login(data: Object) {
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Observable((observer: Observer<any>)=>{
      this.http.post(this.loginUrl, body, { headers }).subscribe(res=>{
/*        let body = res.json();
        if (body && body.data) {
          // this.userService.isLogin = true;
          // this.userService.userName = data['username'];
          observer.next(body.data);
          observer.complete();
        }*/
        let body = res.json();
        if (body && body.token) {
          observer.next(body.token);
          observer.complete();
        }
      },error => {
        observer.error(error)
      });
    });
  }

  logout() {
    //this.userService.isLogin = false;
    //this.userService.userName = '';
  }

}
