import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertModule} from "ng2-bootstrap";
import {QuestionnaireComponent} from "./questionnaire/questionnaire.component";
import {FormsModule} from "@angular/forms";
import {QuestionComponent} from "./question/question.component";
import {QuestionTextComponent} from "./question/shared/question-text/question-text.component";
import { QuestionRadioComponent } from './question/shared/question-radio/question-radio.component';
import { QuestionCheckboxComponent } from './question/shared/question-checkbox/question-checkbox.component';
import { QuestionScoreComponent } from './question/shared/question-score/question-score.component';
import {QuestionModel} from "./models/question-model";

@NgModule({
  imports: [
    CommonModule, FormsModule, AlertModule
  ],
  declarations: [QuestionnaireComponent, QuestionComponent, QuestionTextComponent, QuestionRadioComponent, QuestionCheckboxComponent, QuestionScoreComponent],
  exports: [QuestionnaireComponent, QuestionComponent, QuestionTextComponent]
})
export class SharedModule { }
