import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuestionnaireService} from "./services/questionnaire.service";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent],
  providers: [QuestionnaireService],
  exports: [NavbarComponent]
})
export class CoreModule { }
