import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthConfig, AuthHttp} from "angular2-jwt";
import {RequestOptions, Http} from "@angular/http";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}
@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AuthModule { }
