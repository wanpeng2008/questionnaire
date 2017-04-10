import { Injectable } from '@angular/core';
import {SITE_HOST_URL} from "../../shared/config/env.config";
import {Observer, Observable} from "rxjs";
import {Http} from "@angular/http";
import {UserModel} from "../../shared/models/user.model";

@Injectable()
export class UserService {

  public isLogin:boolean = false;
  public userName:string = '';
  public userInfo:UserModel;
  private getUserInfoUrl = (api: string, userName: string) => `${api}user/get/${userName}`;

  constructor(private http: Http) { }

  getUser(){
    return new Observable((observer: Observer<any>) => {
      if(!this.userName) {
        observer.next('');
        observer.complete();
      } else {
        this.http.get(this.getUserInfoUrl(SITE_HOST_URL, this.userName)).map(res=><UserModel>res.json().data).subscribe(data => {
          this.isLogin = true;
          this.userInfo = data;
          observer.next(data);
          observer.complete();
        }, err => {
          this.isLogin = false;
          this.userInfo = null;
          observer.error(err);
        });
      }
    });
  }

}
