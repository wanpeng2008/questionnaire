import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CenterRoutingModule } from './center-routing.module';
import { CenterComponent } from './center.component';
import { QuestionnaireItemComponent } from './shared/questionnaire-item/questionnaire-item.component';
import { QuestionnaireDetailComponent } from './shared/questionnaire-detail/questionnaire-detail.component';
import { QuestionnaireControlsComponent } from './shared/questionnaire-controls/questionnaire-controls.component';
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    CenterRoutingModule,
    CoreModule
  ],
  declarations: [CenterComponent, QuestionnaireItemComponent, QuestionnaireDetailComponent, QuestionnaireControlsComponent]
})
export class CenterModule { }
