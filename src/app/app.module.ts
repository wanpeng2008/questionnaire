import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BsDropdownModule} from "ng2-bootstrap";
import {HomeModule} from "./home/home.module";
import {AdminModule} from "./admin/admin.module";
import {UserService} from "./core/services/user.service";
import {QuestionnaireService} from "./core/services/questionnaire.service";
import {PublishedModule} from "./published/published.module";
import {AuthService} from "./core/services/auth.service";


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
    PublishedModule,
    BsDropdownModule.forRoot(),
    //InMemoryWebApiModule.forRoot(BackendMockService,{post204: false, put204: false,})
  ],
  // 放在共同的parent，保证单例
  providers: [UserService, QuestionnaireService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
