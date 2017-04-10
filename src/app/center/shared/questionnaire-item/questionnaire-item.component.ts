import {Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import {QuestionnaireState, QuestionnaireModel} from "../../../shared/models/questionnaire-model";

@Component({
  selector: 'app-questionnaire-item',
  templateUrl: './questionnaire-item.component.html',
  styleUrls: ['./questionnaire-item.component.css']
})
export class QuestionnaireItemComponent implements OnInit, OnChanges {

  @Input() questionnaire:QuestionnaireModel;
  private stateText:String;
  private stateClass:String;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let questionnaireChage = changes['questionnaire'];
    if(questionnaireChage.previousValue.state &&
      questionnaireChage.currentValue.state != questionnaireChage.previousValue.state){
      this.questionnaire = changes['questionnaire'].currentValue;
      this.setState();
    }
  }

  private setState() {
    switch (this.questionnaire.state){
      case QuestionnaireState.Created:
        this.stateText = '已创建';
        this.stateClass = 'label-warning';
        break;
      case QuestionnaireState.Published:
        this.stateText = '回收中';
        this.stateClass = 'label-info';
        break;
      case QuestionnaireState.Finished:
        this.stateText = '已结束';
        this.stateClass = 'label-success';
        break;
      default:
        break;
    }
  }
}
