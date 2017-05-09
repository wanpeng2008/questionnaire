import { Injectable } from '@angular/core';
import {SITE_HOST_URL} from "../../shared/config/env.config";
import {Observer, Observable} from "rxjs";
import {Http} from "@angular/http";
import {UserModel} from "../../shared/models/user.model";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class UserService {

  //public isLogin:boolean = false;
  //public userName:string = '';
  public userInfo:UserModel;
  private getUserInfoUrl = (api: string, userName: string) => `${api}users/?username=${userName}`;

  constructor(private http: AuthHttp) { }

  getUser(userName?: string){
    return new Observable((observer: Observer<any>) => {
      this.http.get(this.getUserInfoUrl(SITE_HOST_URL, userName)).map(res=>new UserModel(res.json())).subscribe(data => {
        //this.isLogin = true;
        this.userInfo = data;
        observer.next(data);
        observer.complete();
      }, err => {
        //this.isLogin = false;
        this.userInfo = null;
        observer.error(err);
      });
    })
  }

}
