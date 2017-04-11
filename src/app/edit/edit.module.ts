import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import {EditSharedModule} from "./shared/edit-shared.module";
import {TabsModule} from "ng2-bootstrap";
import {SharedModule} from "../shared/shared.module";
import {QuestionnaireService} from "../core/services/questionnaire.service";
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    EditRoutingModule,
    EditSharedModule,
    SharedModule,
    CoreModule
  ],
  declarations: [EditComponent, ],
  providers: [QuestionnaireService]
})
export class EditModule { }
