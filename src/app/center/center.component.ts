import { Component, OnInit } from '@angular/core';
import {QuestionnaireModel, QuestionnaireState} from "../shared/models/questionnaire-model";
import {QuestionnaireService} from "../core/services/questionnaire.service";

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  private questionnaires:QuestionnaireModel[] =[];
  private selectedQuestionnaire:QuestionnaireModel;
  private selectedIndex:number;
  private isEmpty:boolean;

  constructor(private questionnaireService:QuestionnaireService) { }

  ngOnInit() {
    this.questionnaireService.getQuestionnaires()
      .subscribe(
        questionnaires => {
          //后端返回空对象或空的问卷数组
          if(!questionnaires || questionnaires.length==0){
            this.isEmpty = true;
            return;
          }
          this.isEmpty = false;
          this.questionnaires = questionnaires;
          this.selectedQuestionnaire = this.questionnaires[0];
          this.selectedIndex = 0;
        },
        error => console.error(error)
      )
  }

  onSelect(questionnaire:QuestionnaireModel, index:number){
    this.selectedQuestionnaire = questionnaire;
    this.selectedIndex = index;
  }

  onPublishQuestionnaire(){
    this.questionnaireService.updateQuestionnaireState(this.selectedQuestionnaire.id, QuestionnaireState.Published).subscribe(questionnaire => {
      this.selectedQuestionnaire.state = QuestionnaireState.Published;
      this.questionnaires[this.selectedIndex] = Object.assign({},this.selectedQuestionnaire)
    },
    error => console.log(error)
    )
  }

}
