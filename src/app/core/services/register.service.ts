import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {SITE_HOST_URL} from "../../shared/config/env.config";
import {FieldBase} from "../../user/shared/field/field-base";
import {FieldText} from "../../user/shared/field/field-text";
import {FormControl, Validators, FormGroup} from "@angular/forms";
import {FieldValidators} from "../../user/shared/field/field-validators";

@Injectable()
export class RegisterService {


  private registerUrl = `${SITE_HOST_URL}auth/register`;

  constructor(private http: Http) { }

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

  addUser(data: Object) {
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(this.registerUrl, body, { headers });
  }

}
