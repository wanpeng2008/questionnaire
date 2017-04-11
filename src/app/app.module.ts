import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BsDropdownModule} from "ng2-bootstrap";
import {HomeModule} from "./home/home.module";
import {AdminModule} from "./admin/admin.module";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {BackendMockService} from "./core/services/backend-mock.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdminModule,
    HomeModule,
    BsDropdownModule.forRoot(),
    InMemoryWebApiModule.forRoot(BackendMockService)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
