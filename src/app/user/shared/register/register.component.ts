import { Component, OnInit } from '@angular/core';
import {Observer, Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {FieldBase} from "../field/field-base";
import {Router} from "@angular/router";
import {RegisterService} from "../../../core/services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  fields: FieldBase<any>[] = [];
  alert:any = {msg: '', type: 'success', closable: true};

  constructor(private rs: RegisterService,
              private route:Router) {
    this.fields = rs.getFields();
  }

  ngOnInit() {
    console.debug('RegisterComponent init')
    this.form = this.rs.toFormGroup(this.fields);
  }

  showPassword () {
    this.fields.forEach((field : any) => {
      if (field.key === 'password') {
        field.type = field.type === 'password' ? 'text' : 'password';
      }
    });
  }

  resetForm () {
    this.form.reset();
  }

  register() {
    this.rs
      .addUser(this.form.value)
      .subscribe((res: any) => {
        new Observable((observer: Observer<any>) => {
          this.alert.msg =  "注册成功"; // 操作提示信息
          this.alert.type = "success";
          observer.next(true);
        }).delay(2000).subscribe(data=>{ // 操作提示，2秒后跳转到首页
          this.alert.msg = ""
          this.route.navigate(['']); // 跳到首页
        });
      }, (error: any) => {
        //console.error(error);
        this.alert.msg =  "注册失败"; // 操作提示信息
        this.alert.type = "danger";
      });
  }

}
