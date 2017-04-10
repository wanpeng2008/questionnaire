import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {QuestionModel} from "../../../models/question-model";
import {QuestionComponent} from "../../question.component";

@Component({
  selector: 'question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.css']
})
export class QuestionTextComponent extends QuestionComponent{

  @Input()
  question:QuestionModel;

  @Input()
  editable:boolean;

  @Output()
  deleteQuestionRequest:EventEmitter<any> = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
