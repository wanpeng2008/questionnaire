import { Injectable } from '@angular/core';
import {tokenNotExpired, JwtHelper, AuthHttp} from "angular2-jwt";
import {UserModel} from "../../shared/models/user.model";
import {Observable, Observer} from "rxjs";
import {SITE_HOST_URL} from "../../shared/config/env.config";
import {Http, Headers} from "@angular/http";

@Injectable()
export class AuthService {

  constructor(private http: Http, private authHttp: AuthHttp) { }
  public currentUserInfo:UserModel = null;
  private loginUrl = `${SITE_HOST_URL}auth`;
  private refreshCurrentUserInfoUrl = `${SITE_HOST_URL}users/?username=`;

  login(data: Object) {
    return new Observable((observer: Observer<any>)=> {
      let body = JSON.stringify(data);
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.loginRequest(body, headers).subscribe((token) => {
        if (token) {
          localStorage.setItem('token', token);
          this.refreshCurrentUserInfoRequest().subscribe(res => {
            this.currentUserInfo = res;
            observer.next(res)
            observer.complete()
          }, error => {
            this.currentUserInfo = null;
            observer.error(error)
          })
        }
      }, error => {
        observer.error(error)
      })
    })
  }

  private loginRequest(body, headers){
    return new Observable((observer: Observer<any>)=>{
      this.http.post(this.loginUrl, body, { headers }).subscribe(res=>{
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
    return new Observable((observer: Observer<any>)=> {
      localStorage.removeItem('token')
      this.currentUserInfo = null;
      observer.next(null)
      observer.complete()
    })
  }

  public loggedIn():boolean {
    return tokenNotExpired();
  }

  public refreshCurrentUserInfoRequest(){
    return new Observable((observer: Observer<any>) => {
      this.authHttp.get(this.refreshCurrentUserInfoUrl).map(res=>new UserModel(res.json())).subscribe(data => {
        observer.next(data);
        observer.complete();
      }, err => {
        observer.error(err);
      });
    })
  }
}
